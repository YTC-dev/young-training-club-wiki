(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lightbox = document.getElementById("departmentLightbox");
  const lightboxImage = lightbox?.querySelector(".department-lightbox__image");
  const lightboxCaption = lightbox?.querySelector(".department-lightbox__caption");
  const lightboxClose = lightbox?.querySelector(".department-lightbox-close");
  const lightboxPrev = lightbox?.querySelector(".department-lightbox-prev");
  const lightboxNext = lightbox?.querySelector(".department-lightbox-next");
  let lightboxItems = [];
  let lightboxIndex = 0;
  let lastFocusedElement = null;
  let releaseLightboxHold = null;

  lightbox?.setAttribute("role", "dialog");
  lightbox?.setAttribute("aria-modal", "true");
  lightbox?.setAttribute("aria-label", "Xem ảnh phóng to");
  lightboxClose?.setAttribute("aria-label", "Đóng");
  lightboxPrev?.setAttribute("aria-label", "Ảnh trước");
  lightboxNext?.setAttribute("aria-label", "Ảnh tiếp");

  const updateLightbox = (direction = 0) => {
    const item = lightboxItems[lightboxIndex];
    const image = item?.querySelector("img");
    if (!image || !lightboxImage || !lightboxCaption) return;

    const source = image.currentSrc || image.src;
    const token = (updateLightbox.token || 0) + 1;
    updateLightbox.token = token;

    const preload = new Image();
    preload.onload = preload.onerror = () => {
      if (token !== updateLightbox.token) return;
      lightboxImage.src = source;
      lightboxImage.alt = image.alt || "";
      lightboxCaption.textContent =
        item.querySelector(".department-gallery-card__caption")?.textContent.trim() || image.alt || "";
    };
    preload.src = source;
  };

  const closeLightbox = () => {
    if (!lightbox?.classList.contains("active")) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
    releaseLightboxHold?.();
    releaseLightboxHold = null;
    lastFocusedElement?.focus({ preventScroll: true });
  };

  const moveLightbox = (direction) => {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + direction + lightboxItems.length) % lightboxItems.length;
    updateLightbox(direction);
  };

  const openLightbox = (items, item, onOpen, onClose) => {
    if (!lightbox || !lightboxImage || !lightboxCaption) return;
    const index = items.indexOf(item);
    if (index < 0) return;

    lightboxItems = items;
    lightboxIndex = index;
    lastFocusedElement = document.activeElement;
    onOpen?.();
    releaseLightboxHold = onClose;
    updateLightbox();
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    lightboxClose?.focus({ preventScroll: true });
  };

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
      counter.textContent = `${String(current + 1).padStart(2, "0")} / ${String(maxIndex + 1).padStart(2, "0")}`;
      progress.setAttribute("aria-valuetext", counter.textContent);
    };

    const userGoTo = (index) => {
      goTo(index);
      stopAuto();
      startAuto();
    };

    items.forEach((item, index) => {
      const image = item.querySelector("img");
      if (!image) return;
      image.draggable = false;
      const caption = item.querySelector(".department-gallery-card__caption")?.textContent.trim();
      item.tabIndex = 0;
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", `Xem ảnh ${index + 1}${caption ? `: ${caption}` : ""}`);
      item.addEventListener("click", () => {
        if (!suppressClick) {
          openLightbox(items, item, () => setHold("lightbox", true), () => setHold("lightbox", false));
        }
      });
      item.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openLightbox(items, item, () => setHold("lightbox", true), () => setHold("lightbox", false));
        }
      });
      item.addEventListener("focus", () => {
        const perView = Math.max(1, Math.floor(wrapper.clientWidth / step));
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
      wrapper.setPointerCapture?.(event.pointerId);
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

  lightboxClose?.addEventListener("click", closeLightbox);
  lightboxPrev?.addEventListener("click", () => moveLightbox(-1));
  lightboxNext?.addEventListener("click", () => moveLightbox(1));
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox?.classList.contains("active")) return;
    if (event.key === "Escape") closeLightbox();
    else if (event.key === "ArrowLeft") moveLightbox(-1);
    else if (event.key === "ArrowRight") moveLightbox(1);
    else if (event.key === "Tab") {
      const focusable = [lightboxClose, lightboxPrev, lightboxNext].filter(Boolean);
      const index = focusable.indexOf(document.activeElement);
      event.preventDefault();
      focusable[(index + (event.shiftKey ? -1 : 1) + focusable.length) % focusable.length]?.focus();
    }
  });

  let touchStartX = 0;
  lightbox?.addEventListener("touchstart", (event) => {
    touchStartX = event.touches[0].clientX;
  }, { passive: true });
  lightbox?.addEventListener("touchend", (event) => {
    const difference = touchStartX - event.changedTouches[0].clientX;
    if (Math.abs(difference) > 50) moveLightbox(difference > 0 ? 1 : -1);
  }, { passive: true });
})();
