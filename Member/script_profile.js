(function () {
  const track = document.getElementById('galleryTrack');
  const wrapper = document.getElementById('galleryWrapper');
  const progressHost = document.getElementById('galleryDots');
  const prevBtn = document.getElementById('galPrev');
  const nextBtn = document.getElementById('galNext');
  if (!track || !wrapper) return;

  const items = Array.from(track.querySelectorAll('.gallery-item'));
  const total = items.length;
  if (!total) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const clamp = (n, min, max) => Math.max(min, Math.min(n, max));
  const pad = n => String(n).padStart(2, '0');

  const ICON = {
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="15 18 9 12 15 6"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>'
  };

  // ===== Thanh điều khiển: [←] progress + đếm [→] =====
  let fillEl = null, counterEl = null, controlsEl = null;
  if (prevBtn && nextBtn && progressHost) {
    const nav = prevBtn.parentElement;
    const controls = document.createElement('div');
    controls.className = 'gallery-controls';
    controlsEl = controls;
    nav.parentNode.insertBefore(controls, nav);

    prevBtn.className = 'gallery-arrow';
    nextBtn.className = 'gallery-arrow';
    prevBtn.innerHTML = ICON.left;
    nextBtn.innerHTML = ICON.right;

    progressHost.className = 'gallery-progress-wrap';
    progressHost.innerHTML =
      '<div class="gallery-progress"><span class="gallery-progress-fill"></span></div>' +
      '<span class="gallery-counter" aria-live="polite"></span>';
    fillEl = progressHost.querySelector('.gallery-progress-fill');
    counterEl = progressHost.querySelector('.gallery-counter');

    controls.append(prevBtn, progressHost, nextBtn);
    if (!nav.children.length) nav.remove();

    // Bấm vào thanh tiến trình để nhảy tới vị trí tương ứng
    progressHost.querySelector('.gallery-progress').addEventListener('click', e => {
      const r = e.currentTarget.getBoundingClientRect();
      userGoTo(Math.round(((e.clientX - r.left) / r.width) * maxIndex));
    });
  }

  // ===== Trạng thái & đo kích thước =====
  let current = 0, perView = 1, step = 0, maxIndex = 0, maxShift = 0, itemW = 0;

  function measure() {
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const viewW = wrapper.clientWidth;
    itemW = items[0].offsetWidth;
    step = itemW + gap;
    perView = Math.max(1, Math.floor((viewW + gap) / step + 0.05));
    maxShift = Math.max(0, total * itemW + (total - 1) * gap - viewW);
    maxIndex = maxShift <= 1 ? 0 : Math.max(0, Math.ceil((maxShift - 1) / step));
    if (controlsEl) controlsEl.hidden = maxIndex === 0;   // đủ chỗ hiện hết thì ẩn điều khiển
  }

  const shiftFor = i => Math.min(i * step, maxShift);
  const setX = px => track.style.setProperty('--x', `${-px}px`);

  function render() {
    const shift = shiftFor(current);
    const viewW = wrapper.clientWidth;
    items.forEach(it => it.classList.remove('is-active'));
    items.forEach((it, i) => {
      const left = i * step;
      it.classList.toggle('is-active', left >= shift - 4 && left + itemW <= shift + viewW + 4);
    });
    if (fillEl) fillEl.style.setProperty('--p', `${((current + 1) / (maxIndex + 1)) * 100}%`);
    if (counterEl) counterEl.textContent = `${pad(current + 1)} / ${pad(maxIndex + 1)}`;
  }

  function goTo(i, instant) {
    current = clamp(i, 0, maxIndex);
    if (instant) {
      track.classList.add('is-dragging');
      setX(shiftFor(current));
      void track.offsetWidth;
      track.classList.remove('is-dragging');
    } else {
      setX(shiftFor(current));
    }
    render();
  }

  function userGoTo(i) {
    goTo(i);
    stopAuto(); startAuto();
  }

  const wrapNext = () => (current >= maxIndex ? 0 : current + 1);
  const wrapPrev = () => (current <= 0 ? maxIndex : current - 1);
  prevBtn && prevBtn.addEventListener('click', () => userGoTo(wrapPrev()));
  nextBtn && nextBtn.addEventListener('click', () => userGoTo(wrapNext()));

  // ===== Kéo / vuốt bám theo ngón tay, có quán tính =====
  let drag = null, suppressClick = false;

  wrapper.addEventListener('pointerdown', e => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    drag = {
      id: e.pointerId, x: e.clientX, base: shiftFor(current),
      moved: false, lastX: e.clientX, lastT: performance.now(), v: 0
    };
  });

  window.addEventListener('pointermove', e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.x;
    if (!drag.moved) {
      if (Math.abs(dx) < 6) return;
      drag.moved = true;
      track.classList.add('is-dragging');
      wrapper.classList.add('is-grabbing');
      setHold('drag', true);
    }
    const now = performance.now();
    drag.v = (e.clientX - drag.lastX) / Math.max(1, now - drag.lastT);
    drag.lastX = e.clientX; drag.lastT = now;

    let target = drag.base - dx;
    // Kéo quá mép thì có lực cản (rubber-band)
    if (target < 0) target *= 0.35;
    else if (target > maxShift) target = maxShift + (target - maxShift) * 0.35;
    setX(target);
  });

  function endDrag(e) {
    if (!drag || e.pointerId !== drag.id) return;
    const d = drag; drag = null;
    if (!d.moved) return;
    track.classList.remove('is-dragging');
    wrapper.classList.remove('is-grabbing');
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 60);

    const dx = (e.clientX ?? d.lastX) - d.x;
    const projected = d.base - dx - d.v * 180;            // thêm quán tính
    const idx = clamp(Math.round(projected / step), current - perView, current + perView);
    goTo(idx);
    setHold('drag', false);
  }
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // Chặn click mở lightbox sau khi vừa kéo
  wrapper.addEventListener('click', e => {
    if (suppressClick) { e.stopPropagation(); e.preventDefault(); }
  }, true);

  // Focus bằng phím Tab không được làm lệch khung
  wrapper.addEventListener('scroll', () => { wrapper.scrollLeft = 0; });

  // ===== Tự chạy: tạm dừng khi hover / tab ẩn / ngoài màn hình / mở lightbox =====
  let timer = null;
  const holds = new Set(['offscreen']);

  function startAuto() {
    if (reduceMotion || timer || holds.size || maxIndex === 0) return;
    timer = setInterval(() => goTo(wrapNext()), 4500);
  }
  function stopAuto() { clearInterval(timer); timer = null; }
  function setHold(key, on) {
    on ? holds.add(key) : holds.delete(key);
    holds.size ? stopAuto() : startAuto();
  }

  wrapper.addEventListener('pointerenter', e => { if (e.pointerType === 'mouse') setHold('hover', true); });
  wrapper.addEventListener('pointerleave', e => { if (e.pointerType === 'mouse') setHold('hover', false); });
  document.addEventListener('visibilitychange', () => setHold('hidden', document.hidden));
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([en]) => setHold('offscreen', !en.isIntersecting), { threshold: 0.2 })
      .observe(wrapper);
  } else {
    holds.delete('offscreen');
  }

  // ===== Tải ảnh: hiện dần, báo lỗi gọn =====
  items.forEach((item, i) => {
    const img = item.querySelector('img');
    if (!img) { item.classList.add('is-placeholder'); return; }   // giữ nguyên SVG "Đang cập nhật"
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', `Xem ảnh ${i + 1}/${total}`);
    img.loading = 'lazy';
    img.decoding = 'async';
    img.draggable = false;
    const ok = () => item.classList.add('is-loaded');
    const bad = () => item.classList.add('is-broken');
    if (img.complete) (img.naturalWidth ? ok() : bad());
    else { img.addEventListener('load', ok, { once: true }); img.addEventListener('error', bad, { once: true }); }

    item.addEventListener('focus', () => {
      if (i < current) goTo(i);
      else if (i >= current + perView) goTo(i - perView + 1);
    });
  });

  // ===== Responsive =====
  let rafId = 0;
  window.addEventListener('resize', () => {
    cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      measure();
      goTo(current, true);
      stopAuto(); startAuto();
    });
  });

  // ===== LIGHTBOX =====
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Xem ảnh phóng to');
  overlay.innerHTML = `
    <div class="lightbox-topbar">
      <span class="lightbox-counter"></span>
      <button class="lightbox-close" aria-label="Đóng">${ICON.close}</button>
    </div>
    <button class="lightbox-nav lightbox-prev" aria-label="Ảnh trước">${ICON.left}</button>
    <figure class="lightbox-stage">
      <img src="" alt="" id="lightboxImg">
      <figcaption class="lightbox-caption" id="lightboxCaption"></figcaption>
    </figure>
    <button class="lightbox-nav lightbox-next" aria-label="Ảnh tiếp">${ICON.right}</button>
  `;
  document.body.appendChild(overlay);

  const lbImg = overlay.querySelector('#lightboxImg');
  const lbCaption = overlay.querySelector('#lightboxCaption');
  const lbCounter = overlay.querySelector('.lightbox-counter');
  const lbStage = overlay.querySelector('.lightbox-stage');
  const lbClose = overlay.querySelector('.lightbox-close');
  const lbPrev = overlay.querySelector('.lightbox-prev');
  const lbNext = overlay.querySelector('.lightbox-next');

  let lbList = [], lbIndex = 0, lbToken = 0, lastFocus = null;
  const isOpen = () => overlay.classList.contains('active');

  function showLb(i, dir = 0) {
    const n = lbList.length;
    lbIndex = (i + n) % n;
    const item = lbList[lbIndex];
    const img = item.querySelector('img');
    const cap = item.querySelector('.gallery-caption');
    const src = img.currentSrc || img.src;
    const token = ++lbToken;

    lbCounter.textContent = `${pad(lbIndex + 1)} / ${pad(n)}`;
    if (dir) {
      lbImg.style.setProperty('--out', `${-dir * 28}px`);
      lbImg.classList.add('is-out');
    }

    const loaded = new Promise(res => {
      const pre = new Image();
      pre.onload = pre.onerror = res;
      pre.src = src;
    });
    const wait = new Promise(res => setTimeout(res, dir && !reduceMotion ? 170 : 0));

    Promise.all([loaded, wait]).then(() => {
      if (token !== lbToken) return;
      lbImg.style.transition = 'none';
      lbImg.style.setProperty('--out', `${dir * 28}px`);
      lbImg.src = src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = cap ? cap.textContent : '';
      void lbImg.offsetWidth;
      lbImg.style.transition = '';
      lbImg.classList.remove('is-out');

      // Tải trước ảnh kế bên để chuyển ảnh không bị khựng
      [1, -1].forEach(s => {
        const nb = lbList[(lbIndex + s + n) % n].querySelector('img');
        if (nb) new Image().src = nb.currentSrc || nb.src;
      });
    });
  }

  function openLightbox(item) {
    lbList = items.filter(it => it.querySelector('img') && !it.classList.contains('is-broken'));
    const idx = lbList.indexOf(item);
    if (idx < 0) return;
    lastFocus = document.activeElement;
    lbImg.classList.remove('is-out');
    showLb(idx);
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setHold('lightbox', true);
    lbClose.focus({ preventScroll: true });
  }

  function closeLightbox() {
    if (!isOpen()) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    // Đưa gallery về đúng ảnh vừa xem
    const idx = items.indexOf(lbList[lbIndex]);
    if (idx >= 0) {
      if (idx < current) goTo(idx);
      else if (idx >= current + perView) goTo(idx - perView + 1);
    }
    setHold('lightbox', false);
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }

  items.forEach(item => {
    if (!item.querySelector('img')) return;
    item.addEventListener('click', () => openLightbox(item));
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openLightbox(item); }
    });
  });

  lbClose.addEventListener('click', closeLightbox);
  lbPrev.addEventListener('click', e => { e.stopPropagation(); showLb(lbIndex - 1, -1); });
  lbNext.addEventListener('click', e => { e.stopPropagation(); showLb(lbIndex + 1, 1); });
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target === lbStage) closeLightbox();
  });

  document.addEventListener('keydown', e => {
    if (!isOpen()) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowLeft') showLb(lbIndex - 1, -1);
    else if (e.key === 'ArrowRight') showLb(lbIndex + 1, 1);
    else if (e.key === 'Tab') {
      const f = [lbClose, lbPrev, lbNext];
      const i = f.indexOf(document.activeElement);
      e.preventDefault();
      f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });

  let lbTouchX = 0;
  overlay.addEventListener('touchstart', e => { lbTouchX = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    const diff = lbTouchX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? showLb(lbIndex + 1, 1) : showLb(lbIndex - 1, -1);
  });

  // ===== Khởi tạo =====
  measure();
  goTo(0, true);
  window.addEventListener('load', () => { measure(); goTo(current, true); });
})();

// =========================
// BADGE SPARKLE EFFECT
// =========================
function initBadgeSparkle(selector = '.profile-hero .golden-badge') {
  const badges = document.querySelectorAll(selector);

  badges.forEach(badge => {
    if (getComputedStyle(badge).position === 'static') {
      badge.style.position = 'relative';
    }
    badge.style.overflow = 'visible';

    function createSparkle() {
      const sparkle = document.createElement('span');
      sparkle.className = 'badge-sparkle';

      const x = Math.random() * 100; // %
      const y = Math.random() * 100; // %
      const size = 3 + Math.random() * 3; // size

      // Hướng toả ra ngẫu nhiên (để tia bay ra xa tâm 1 chút)
      const angle = Math.random() * 360;
      const distance = 8 + Math.random() * 5; // px toả ra xa bao nhiêu
      const dx = Math.cos(angle * Math.PI / 180) * distance;
      const dy = Math.sin(angle * Math.PI / 180) * distance;

      const duration = 1200 + Math.random() * 800; // 1.2s - 2s

      sparkle.style.cssText = `
        position: absolute;
        top: ${y}%;
        left: ${x}%;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, #fff8e1 0%, #ffcd4e 60%, transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 6px rgba(255, 216, 73, 0.9);
        --dx: ${dx}px;
        --dy: ${dy}px;
        animation: sparkle-drift ${duration}ms ease-out forwards;
      `;

      badge.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), duration);
    }

    setInterval(() => {
      createSparkle();
      if (Math.random() > 0.6) createSparkle();
    }, 700);
  });
}

initBadgeSparkle();

function initBlueBadgeAnimation() {
  document.querySelectorAll('.profile-hero .blue-badge').forEach((badge) => {
    badge.tabIndex = 0;
    badge.setAttribute('role', 'button');
    badge.setAttribute('aria-pressed', 'false');
    badge.setAttribute('aria-label', 'Tạm dừng hiệu ứng huy hiệu');

    // Thêm cặp chấm sáng thứ 2 (lệch pha 1/4 và 3/4 chu kỳ so với cặp gốc)
    if (!badge.querySelector('.badge-dot')) {
      const dotC = document.createElement('span');
      dotC.className = 'badge-dot badge-dot--c';
      const dotD = document.createElement('span');
      dotD.className = 'badge-dot badge-dot--d';
      badge.appendChild(dotC);
      badge.appendChild(dotD);
    }

    const toggleAnimation = () => {
      const isPaused = badge.dataset.animationPaused !== 'true';
      badge.dataset.animationPaused = String(isPaused);
      badge.style.setProperty('--blue-badge-play-state', isPaused ? 'paused' : 'running');
      badge.setAttribute('aria-pressed', String(isPaused));
      badge.setAttribute(
        'aria-label',
        isPaused ? 'Tiếp tục hiệu ứng huy hiệu' : 'Tạm dừng hiệu ứng huy hiệu'
      );
    };

    badge.addEventListener('click', toggleAnimation);
    badge.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      toggleAnimation();
    });
  });
}