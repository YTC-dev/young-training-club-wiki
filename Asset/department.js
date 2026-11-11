(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const pad = (n) => String(n).padStart(2, "0");

  const ICON = {
    left:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  };

  // ===== LIGHTBOX DÙNG CHUNG CHO 4 BAN (HOẠT ĐỘNG NHƯ LIGHTBOX PROFILE & CONTEST) =====
  let overlay = document.getElementById("departmentLightbox");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "departmentLightbox";
    document.body.appendChild(overlay);
  }
  overlay.className = "lightbox-overlay department-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Xem ảnh phóng to");
  overlay.innerHTML = `
    <div class="lightbox-topbar department-lightbox-topbar">
      <span class="lightbox-counter department-lightbox-counter"></span>
      <button class="lightbox-close department-lightbox-close" type="button" aria-label="Đóng">${ICON.close}</button>
    </div>
    <button class="lightbox-nav lightbox-prev department-lightbox-nav department-lightbox-prev" type="button" aria-label="Ảnh trước">${ICON.left}</button>
    <figure class="lightbox-stage department-lightbox-stage department-lightbox__inner">
      <img src="" alt="" id="lightboxImg" class="department-lightbox__image">
      <figcaption class="lightbox-caption department-lightbox__caption" id="lightboxCaption"></figcaption>
    </figure>
    <button class="lightbox-nav lightbox-next department-lightbox-nav department-lightbox-next" type="button" aria-label="Ảnh tiếp">${ICON.right}</button>
  `;

  const lbImg = overlay.querySelector("#lightboxImg");
  const lbCaption = overlay.querySelector("#lightboxCaption");
  const lbCounter = overlay.querySelector(".lightbox-counter");
  const lbStage = overlay.querySelector(".lightbox-stage");
  const lbClose = overlay.querySelector(".lightbox-close");
  const lbPrev = overlay.querySelector(".lightbox-prev");
  const lbNext = overlay.querySelector(".lightbox-next");

  let lbList = [];
  let lbIndex = 0;
  let lbToken = 0;
  let lastFocus = null;
  let lbHooks = null;

  const isOpen = () => overlay.classList.contains("active");

  const showLb = (i, dir = 0) => {
    const n = lbList.length;
    if (!n) return;
    lbIndex = (i + n) % n;
    const item = lbList[lbIndex];
    const img = item?.querySelector("img");
    if (!img || !lbImg) return;

    const cap = item.querySelector(".department-gallery-card__caption") || item.querySelector(".gallery-caption");
    const captionText = cap ? cap.textContent.trim() : (img.alt || "");
    const src = img.currentSrc || img.src;
    const token = ++lbToken;

    if (lbCounter) {
      lbCounter.textContent = `${pad(lbIndex + 1)} / ${pad(n)}`;
    }

    if (dir) {
      lbImg.style.setProperty("--out", `${-dir * 28}px`);
      lbImg.classList.add("is-out");
    }

    const loaded = new Promise((resolve) => {
      const pre = new Image();
      pre.onload = pre.onerror = resolve;
      pre.src = src;
    });
    const wait = new Promise((resolve) => setTimeout(resolve, dir && !reduceMotion ? 170 : 0));

    Promise.all([loaded, wait]).then(() => {
      if (token !== lbToken || !lbImg) return;
      lbImg.style.transition = "none";
      lbImg.style.setProperty("--out", `${dir * 28}px`);
      lbImg.src = src;
      lbImg.alt = img.alt || "";
      if (lbCaption) lbCaption.textContent = captionText;
      void lbImg.offsetWidth;
      lbImg.style.transition = "";
      lbImg.classList.remove("is-out");

      // Tải trước ảnh liền kề để chuyển ảnh mượt mà, không bị khựng
      [1, -1].forEach((s) => {
        const neighbor = lbList[(lbIndex + s + n) % n]?.querySelector("img");
        if (neighbor) {
          const preImg = new Image();
          preImg.src = neighbor.currentSrc || neighbor.src;
        }
      });
    });
  };

  const openLightbox = (list, item, hooks) => {
    const idx = list.indexOf(item);
    if (idx < 0) return;
    lbList = list;
    lbHooks = hooks || null;
    lastFocus = document.activeElement;
    if (lbImg) lbImg.classList.remove("is-out");
    showLb(idx);
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    lbHooks?.onOpen?.();
    lbClose?.focus({ preventScroll: true });
  };

  const closeLightbox = () => {
    if (!isOpen()) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    lbHooks?.onClose?.(lbList[lbIndex]);
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus({ preventScroll: true });
    }
  };

  lbClose?.addEventListener("click", closeLightbox);
  lbPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    showLb(lbIndex - 1, -1);
  });
  lbNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    showLb(lbIndex + 1, 1);
  });
  overlay?.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === lbStage) closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (!isOpen()) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "ArrowLeft") showLb(lbIndex - 1, -1);
    else if (e.key === "ArrowRight") showLb(lbIndex + 1, 1);
    else if (e.key === "Tab") {
      const focusable = [lbClose, lbPrev, lbNext].filter(Boolean);
      const index = focusable.indexOf(document.activeElement);
      e.preventDefault();
      focusable[(index + (e.shiftKey ? -1 : 1) + focusable.length) % focusable.length]?.focus();
    }
  });

  let lbTouchX = 0;
  overlay?.addEventListener("touchstart", (e) => {
    lbTouchX = e.touches[0].clientX;
  }, { passive: true });
  overlay?.addEventListener("touchend", (e) => {
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) showLb(lbIndex + (diff > 0 ? 1 : -1), diff > 0 ? 1 : -1);
  }, { passive: true });

  // ===== KHỞI TẠO CÁC GALLERY CỦA BAN =====
  document.querySelectorAll(".department-gallery").forEach((gallery) => {
    const wrapper = gallery.querySelector(".department-gallery-wrapper");
    const track = gallery.querySelector(".department-gallery-track");
    const dots = gallery.querySelector(".department-gallery-dots");
    const previousButton = gallery.querySelector("[data-gallery-prev]");
    const nextButton = gallery.querySelector("[data-gallery-next]");

    if (!wrapper || !track || !dots) return;

    const items = [...track.querySelectorAll(".department-gallery-card")];
    if (!items.length) {
      gallery.querySelector(".department-gallery-nav")?.setAttribute("hidden", "");
      dots.setAttribute("hidden", "");
      return;
    }
    if (!previousButton || !nextButton) return;

    const navigation = gallery.querySelector(".department-gallery-nav");
    const leftIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>';
    const rightIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>';
    const controls = document.createElement("div");
    const progress = document.createElement("div");
    const progressFill = document.createElement("span");
    const counter = document.createElement("span");
    controls.className = "department-gallery-controls";
    progress.className = "department-gallery-progress";
    progress.setAttribute("role", "slider");
    progress.setAttribute("tabindex", "0");
    progress.setAttribute("aria-label", "Vị trí ảnh trong bộ sưu tập");
    progress.setAttribute("aria-valuemin", "1");
    progressFill.className = "department-gallery-progress-fill";
    counter.className = "department-gallery-counter";
    counter.setAttribute("aria-live", "polite");
    progress.appendChild(progressFill);
    dots.replaceChildren(progress, counter);
    dots.className = "department-gallery-progress-wrap";
    previousButton.className = "department-gallery-arrow";
    previousButton.innerHTML = leftIcon;
    nextButton.className = "department-gallery-arrow";
    nextButton.innerHTML = rightIcon;
    controls.append(previousButton, dots, nextButton);
    if (navigation) {
      navigation.parentNode.insertBefore(controls, navigation);
      navigation.remove();
    } else {
      gallery.appendChild(controls);
    }

    let current = 0;
    let maxIndex = 0;
    let maxShift = 0;
    let step = 0;
    let drag = null;
    let suppressClick = false;
    let timer = null;
    const holds = new Set(["offscreen"]);

    const stopAuto = () => {
      window.clearInterval(timer);
      timer = null;
    };
    const startAuto = () => {
      if (reduceMotion || timer || holds.size || maxIndex === 0) return;
      timer = window.setInterval(() => goTo(current >= maxIndex ? 0 : current + 1), 4500);
    };
    const setHold = (reason, hold) => {
      if (hold) holds.add(reason);
      else holds.delete(reason);
      if (holds.size) stopAuto();
      else startAuto();
    };

    const measure = () => {
      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      step = items[0].getBoundingClientRect().width + gap;
      maxShift = Math.max(0, track.scrollWidth - wrapper.clientWidth);
      maxIndex = step ? Math.max(0, Math.ceil((maxShift - 1) / step)) : 0;
      current = Math.min(current, maxIndex);
    };

    const goTo = (index) => {
      current = Math.max(0, Math.min(index, maxIndex));
      const shift = Math.min(current * step, maxShift);
      track.style.transform = `translateX(-${shift}px)`;
      progressFill.style.setProperty("--progress", `${((current + 1) / (maxIndex + 1)) * 100}%`);
      progress.setAttribute("aria-valuemax", String(maxIndex + 1));
      progress.setAttribute("aria-valuenow", String(current + 1));
      counter.textContent = `${pad(current + 1)} / ${pad(maxIndex + 1)}`;
      progress.setAttribute("aria-valuetext", counter.textContent);
    };

    const userGoTo = (index) => {
      goTo(index);
      stopAuto();
      startAuto();
    };

    const usable = () => items.filter((it) => it.querySelector("img") && !it.classList.contains("is-broken"));

    items.forEach((item, index) => {
      const image = item.querySelector("img");
      if (!image) return;
      image.draggable = false;
      const caption = item.querySelector(".department-gallery-card__caption")?.textContent.trim();
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `Xem ảnh ${index + 1}${caption ? `: ${caption}` : ""}`);

      const ok = () => item.classList.add("is-loaded");
      const bad = () => item.classList.add("is-broken");
      if (image.complete) {
        if (image.naturalWidth) ok();
        else bad();
      } else {
        image.addEventListener("load", ok, { once: true });
        image.addEventListener("error", bad, { once: true });
      }

      const open = () => {
        const perView = Math.max(1, Math.floor(wrapper.clientWidth / (step || 1)));
        openLightbox(usable(), item, {
          onOpen: () => setHold("lightbox", true),
          onClose: (shown) => {
            const idx = items.indexOf(shown);
            if (idx >= 0) {
              if (idx < current) goTo(idx);
              else if (idx >= current + perView) goTo(idx - perView + 1);
            }
            setHold("lightbox", false);
          }
        });
      };

      item.addEventListener("click", () => {
        if (!suppressClick) open();
      });
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
      item.addEventListener("focus", () => {
        const perView = Math.max(1, Math.floor(wrapper.clientWidth / (step || 1)));
        if (index < current) goTo(index);
        else if (index >= current + perView) goTo(index - perView + 1);
      });
    });

    previousButton?.addEventListener("click", () => userGoTo(current <= 0 ? maxIndex : current - 1));
    nextButton?.addEventListener("click", () => userGoTo(current >= maxIndex ? 0 : current + 1));
    progress.addEventListener("click", (event) => {
      const bounds = progress.getBoundingClientRect();
      userGoTo(Math.round(((event.clientX - bounds.left) / bounds.width) * maxIndex));
    });
    progress.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowDown") userGoTo(current - 1);
      else if (event.key === "ArrowRight" || event.key === "ArrowUp") userGoTo(current + 1);
      else if (event.key === "Home") userGoTo(0);
      else if (event.key === "End") userGoTo(maxIndex);
      else return;
      event.preventDefault();
    });
    wrapper.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "mouse" && event.button !== 0) return;
      drag = { pointerId: event.pointerId, startX: event.clientX, base: current * step, moved: false };
    });
    window.addEventListener("pointermove", (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const difference = event.clientX - drag.startX;
      if (!drag.moved && Math.abs(difference) < 6) return;
      if (!drag.moved) {
        drag.moved = true;
        track.classList.add("is-dragging");
        wrapper.classList.add("is-grabbing");
        setHold("drag", true);
      }
      event.preventDefault();
      const shift = Math.max(0, Math.min(drag.base - difference, maxShift));
      track.style.transform = `translateX(-${shift}px)`;
    });
    const endDrag = (event) => {
      if (!drag || event.pointerId !== drag.pointerId) return;
      const wasMoved = drag.moved;
      const shift = drag.base - (event.clientX - drag.startX);
      drag = null;
      if (!wasMoved) return;
      track.classList.remove("is-dragging");
      wrapper.classList.remove("is-grabbing");
      suppressClick = true;
      window.setTimeout(() => { suppressClick = false; }, 60);
      goTo(Math.round(Math.max(0, Math.min(shift, maxShift)) / step));
      setHold("drag", false);
    };
    window.addEventListener("pointerup", endDrag);
    window.addEventListener("pointercancel", endDrag);
    wrapper.addEventListener("click", (event) => {
      if (suppressClick) {
        event.stopPropagation();
        event.preventDefault();
      }
    }, true);
    wrapper.addEventListener("pointerenter", (event) => {
      if (event.pointerType === "mouse") setHold("hover", true);
    });
    wrapper.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") setHold("hover", false);
    });
    wrapper.addEventListener("focusin", () => setHold("focus", true));
    wrapper.addEventListener("focusout", (event) => {
      if (!wrapper.contains(event.relatedTarget)) setHold("focus", false);
    });

    document.addEventListener("visibilitychange", () => setHold("hidden", document.hidden));
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(([entry]) => setHold("offscreen", !entry.isIntersecting), { threshold: 0.2 })
        .observe(wrapper);
    } else {
      holds.delete("offscreen");
    }

    const refresh = () => {
      measure();
      goTo(current);
      const hasOverflow = maxIndex > 0;
      controls.toggleAttribute("hidden", !hasOverflow);
      startAuto();
    };

    refresh();
    window.addEventListener("resize", refresh);
  });
})();
