(function() {
    const track = document.getElementById('galleryTrack');
    const wrapper = document.getElementById('galleryWrapper');
    const dotsContainer = document.getElementById('galleryDots');
    const items = track.querySelectorAll('.gallery-item');
    const total = items.length;
    let current = 0;
    let perView = window.innerWidth <= 768 ? 1 : 3;

    const maxIndex = Math.max(0, total - perView);

    // dots
    const dots = [];
    for (let i = 0; i <= maxIndex; i++) {
      const d = document.createElement('div');
      d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
      d.addEventListener('click', () => goTo(i));
      dotsContainer.appendChild(d);
      dots.push(d);
    }

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIndex));
      const itemW = items[0].offsetWidth + 12;
      track.style.transform = `translateX(-${current * itemW}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    document.getElementById('galPrev').addEventListener('click', () => goTo(current - 1));
    document.getElementById('galNext').addEventListener('click', () => goTo(current + 1));

    // Drag / swipe
    let startX = 0, dragging = false;
    wrapper.addEventListener('mousedown', e => { startX = e.clientX; dragging = true; });
    wrapper.addEventListener('mousemove', e => { if (dragging) e.preventDefault(); });
    wrapper.addEventListener('mouseup', e => {
      if (!dragging) return;
      dragging = false;
      const diff = startX - e.clientX;
      if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
    });
    wrapper.addEventListener('mouseleave', () => { dragging = false; });

    wrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    wrapper.addEventListener('touchend', e => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 40) goTo(current + (diff > 0 ? 1 : -1));
    });

    // Auto-play
    let timer = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 4000);
    wrapper.addEventListener('mouseenter', () => clearInterval(timer));
    wrapper.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 4000);
    });

    window.addEventListener('resize', () => {
      perView = window.innerWidth <= 768 ? 1 : 3;
      goTo(0);
    });

    // ===== LIGHTBOX =====
    // Tạo overlay lightbox và thêm vào body
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
      <div class="lightbox-inner">
        <button class="lightbox-close" aria-label="Đóng">&#10005;</button>
        <button class="lightbox-nav lightbox-prev" aria-label="Ảnh trước">&#8592;</button>
        <button class="lightbox-nav lightbox-next" aria-label="Ảnh tiếp">&#8594;</button>
        <img src="" alt="Ảnh phóng to" id="lightboxImg">
        <p class="lightbox-caption" id="lightboxCaption"></p>
      </div>
    `;
    document.body.appendChild(overlay);

    const lbImg = overlay.querySelector('#lightboxImg');
    const lbCaption = overlay.querySelector('#lightboxCaption');
    let lbIndex = 0;

    // Lấy danh sách ảnh có src thật (không phải placeholder)
    function getImageItems() {
      return Array.from(items).filter(item => item.querySelector('img'));
    }

    function openLightbox(index) {
      const imgItems = getImageItems();
      if (!imgItems.length) return;
      lbIndex = Math.max(0, Math.min(index, imgItems.length - 1));
      const img = imgItems[lbIndex].querySelector('img');
      const caption = imgItems[lbIndex].querySelector('.gallery-caption');
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = caption ? caption.textContent : '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    function prevLightbox() {
      const imgItems = getImageItems();
      openLightbox((lbIndex - 1 + imgItems.length) % imgItems.length);
    }

    function nextLightbox() {
      const imgItems = getImageItems();
      openLightbox((lbIndex + 1) % imgItems.length);
    }

    // Click ảnh trong gallery để mở lightbox
    items.forEach((item, i) => {
      if (item.querySelector('img')) {
        item.addEventListener('click', (e) => {
          if (dragging) return;
          const imgItems = getImageItems();
          const realIndex = imgItems.indexOf(item);
          if (realIndex >= 0) openLightbox(realIndex);
        });
      }
    });

    overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    overlay.querySelector('.lightbox-prev').addEventListener('click', (e) => { e.stopPropagation(); prevLightbox(); });
    overlay.querySelector('.lightbox-next').addEventListener('click', (e) => { e.stopPropagation(); nextLightbox(); });

    // Bấm ngoài ảnh để đóng
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });

    // Phím tắt
    document.addEventListener('keydown', (e) => {
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    });

    // Swipe để chuyển ảnh trong lightbox
    let lbTouchStart = 0;
    overlay.addEventListener('touchstart', e => { lbTouchStart = e.touches[0].clientX; }, { passive: true });
    overlay.addEventListener('touchend', e => {
      const diff = lbTouchStart - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) diff > 0 ? nextLightbox() : prevLightbox();
    });
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