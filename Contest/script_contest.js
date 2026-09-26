(function() {
  'use strict';

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
  let activeImgItems = [];
  let lbIndex = 0;

  function openLightbox(imgItems, index) {
    if (!imgItems.length) return;
    activeImgItems = imgItems;
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
    openLightbox(activeImgItems, (lbIndex - 1 + activeImgItems.length) % activeImgItems.length);
  }

  function nextLightbox() {
    openLightbox(activeImgItems, (lbIndex + 1) % activeImgItems.length);
  }

  overlay.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
  overlay.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); prevLightbox(); });
  overlay.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); nextLightbox(); });
  overlay.addEventListener('click', e => { if (e.target === overlay) closeLightbox(); });

  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
    if (e.key === 'ArrowRight') nextLightbox();
  });

  let lbTouchStart = 0;
  overlay.addEventListener('touchstart', e => { lbTouchStart = e.touches[0].clientX; }, { passive: true });
  overlay.addEventListener('touchend', e => {
    const diff = lbTouchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextLightbox() : prevLightbox();
  });

  // ===== Khởi tạo từng gallery-block =====
  function initGallery(block) {
    const wrapper = block.querySelector('.gallery-track-wrapper');
    const track = block.querySelector('.gallery-track');
    const dotsContainer = block.querySelector('.gallery-dots');
    const prevBtn = block.querySelector('.galPrev');
    const nextBtn = block.querySelector('.galNext');
    const items = track.querySelectorAll('.gallery-item');
    const total = items.length;
    let current = 0;
    let perView = window.innerWidth <= 768 ? 1 : 3;
    let maxIndex = Math.max(0, total - perView);

    let dots = [];
    function buildDots() {
      dotsContainer.innerHTML = '';
      dots = [];
      for (let i = 0; i <= maxIndex; i++) {
        const d = document.createElement('div');
        d.className = 'gallery-dot' + (i === 0 ? ' active' : '');
        d.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(d);
        dots.push(d);
      }
    }
    buildDots();

    function goTo(idx) {
      current = Math.max(0, Math.min(idx, maxIndex));
      const itemW = items[0].offsetWidth + 12;
      track.style.transform = `translateX(-${current * itemW}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
    }

    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

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

    let timer = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 4000);
    wrapper.addEventListener('mouseenter', () => clearInterval(timer));
    wrapper.addEventListener('mouseleave', () => {
      timer = setInterval(() => goTo(current < maxIndex ? current + 1 : 0), 4000);
    });

    window.addEventListener('resize', () => {
      perView = window.innerWidth <= 768 ? 1 : 3;
      maxIndex = Math.max(0, total - perView);
      buildDots();
      goTo(0);
    });

    function getImageItems() {
      return Array.from(items).filter(item => item.querySelector('img'));
    }

    items.forEach(item => {
      if (item.querySelector('img')) {
        item.addEventListener('click', () => {
          if (dragging) return;
          const imgItems = getImageItems();
          const realIndex = imgItems.indexOf(item);
          if (realIndex >= 0) openLightbox(imgItems, realIndex);
        });
      }
    });
  }

  document.querySelectorAll('.gallery-block').forEach(initGallery);
})();
// Lưu ý: hiệu ứng fade-in khi cuộn giờ dùng chung ở Asset/script.js,
// không cần lặp lại ở đây nữa.
// =========================================================
// ✨ PREMIUM ENHANCEMENTS — thanh tiến trình, nút về đầu trang,
//    hiệu ứng gợn sóng cho nút bấm, fade-in so le theo hàng
// Độc lập với code gallery/lightbox phía trên, tự bỏ qua nếu
// trang không có phần tử tương ứng.
// =========================================================
(function () {
  'use strict';

  const prefersReducedMotion =
    window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ----- 1. Thanh tiến trình cuộn trang -----
  const progressBar = document.createElement('div');
  progressBar.className = 'ytc-scroll-progress';
  document.body.appendChild(progressBar);

  let progressTicking = false;
  function updateScrollProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
    progressBar.style.width = pct + '%';
    progressTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!progressTicking) {
      requestAnimationFrame(updateScrollProgress);
      progressTicking = true;
    }
  }, { passive: true });
  updateScrollProgress();

  // ----- 2. Nút "Về đầu trang" -----
  const backToTop = document.createElement('button');
  backToTop.type = 'button';
  backToTop.className = 'ytc-back-to-top';
  backToTop.setAttribute('aria-label', 'Về đầu trang');
  backToTop.innerHTML = '&#8593;';
  document.body.appendChild(backToTop);

  let backToTopTicking = false;
  function updateBackToTop() {
    if (window.scrollY > 480) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
    backToTopTicking = false;
  }
  window.addEventListener('scroll', () => {
    if (!backToTopTicking) {
      requestAnimationFrame(updateBackToTop);
      backToTopTicking = true;
    }
  }, { passive: true });
  updateBackToTop();

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });

  // ----- 3. Hiệu ứng gợn sóng khi bấm nút -----
  const rippleSelector =
    '.btn-hero, .btn-outline, .btn-white, .team-video-btn, .profile-link-btn';

  document.addEventListener('click', e => {
    const btn = e.target.closest(rippleSelector);
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const ripple = document.createElement('span');
    ripple.className = 'ytc-ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });

  // ----- 4. Fade-in so le theo hàng: các phần tử .fade-in nằm cùng
  //          một khối cha sẽ lần lượt xuất hiện cách nhau một nhịp nhỏ -----
  if (!prefersReducedMotion) {
    const groups = new Map();
    document.querySelectorAll('.fade-in').forEach(el => {
      const parent = el.parentElement;
      if (!parent) return;
      if (!groups.has(parent)) groups.set(parent, []);
      groups.get(parent).push(el);
    });

    groups.forEach(siblings => {
      // Chỉ so le khi có từ 2 phần tử trở lên trong cùng một nhóm,
      // và mỗi bậc trễ tối đa 6 phần tử để tránh chờ quá lâu.
      if (siblings.length < 2) return;
      siblings.forEach((el, i) => {
        const step = Math.min(i, 5) * 0.08;
        el.style.setProperty('--ytc-stagger-delay', step + 's');
      });
    });
  }

})();