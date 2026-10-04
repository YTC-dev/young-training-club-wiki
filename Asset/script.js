// =============================================
//  script.js – YTC Website
//  GitHub Pages + Localhost Compatible
// =============================================

// Base URL
const isLocalPreview =
  window.location.protocol === "file:" ||
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1";

const localFileBase = document.currentScript
  ? new URL("..", document.currentScript.src).href.replace(/\/$/, "")
  : "";

const BASE = window.location.protocol === "file:"
  ? localFileBase
  : isLocalPreview
    ? ""
  : window.location.pathname.startsWith("/young-training-club-wiki/")
    ? "/young-training-club-wiki"
    : "";

// ----- Icon SVG (thay cho emoji) -----
const ICON_PATHS = {
  landmark: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
  sparkles: '<path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>',
  newspaper: '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
  clipboard: '<rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>',
  check: '<path d="M20 6 9 17l-5-5"/>'
};

const icon = name =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" ` +
  `stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ` +
  `aria-hidden="true">${ICON_PATHS[name]}</svg>`;

// ----- 1. NAV HTML -----
const navHTML = `
<nav class="navbar">
  <div class="container nav-inner">

    <div class="logo">
      <a href="${BASE}/index.html">
        <img src="${BASE}/Image/YTC_Long_Logo.png"
             alt="YTC - CLB Đào tạo Kỹ năng trẻ"
             class="responsive-img">
      </a>
    </div>

    <ul class="nav-links">
      <li><a href="${BASE}/index.html">Trang chủ</a></li>
      <li><a href="${BASE}/about.html">Giới thiệu</a></li>
      <li class="has-dropdown">
        <a href="${BASE}/contest_event.html">Cuộc thi</a>
        <button type="button" class="dropdown-toggle" aria-label="Mở menu Cuộc thi" aria-expanded="false"></button>
        <ul class="dropdown">
          <li><a href="${BASE}/contest_event.html#podcast-section">Podcast &amp; Video</a></li>
          <li><a href="${BASE}/contest_event.html#mc-section">MC - Giọng nói</a></li>
          <li><a href="${BASE}/contest_event.html#others-section">Các cuộc thi khác</a></li>
        </ul>
      </li>
      <li><a href="${BASE}/news.html">Hoạt động</a></li>
      <li class="has-dropdown">
        <a href="${BASE}/member.html">Thành viên</a>
        <button type="button" class="dropdown-toggle" aria-label="Mở menu Thành viên" aria-expanded="false"></button>
        <ul class="dropdown">
          <li><a href="${BASE}/ChuNhiem.html">Thành viên Chủ nhiệm</a></li>
          <li><a href="${BASE}/NSHC.html">Nhân sự - Hậu cần</a></li>
          <li><a href="${BASE}/MCLT.html">MC - Lễ tân</a></li>
          <li><a href="${BASE}/KTVH.html">Kỹ thuật - Vận hành</a></li>
          <li><a href="${BASE}/TT.html">Truyền thông</a></li>
        </ul>
      </li>
      <li><a href="${BASE}/joinus.html"><b>Tham gia</b></a></li>
    </ul>

    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>
</nav>
`;

// ----- 2. FOOTER HTML -----
const footerHTML = `
<div class="site-footer">
  <div class="footer-top">
    <div class="container footer-grid">

      <!-- Cột 1: Thương hiệu CLB & Giới thiệu -->
      <div class="footer-col footer-col--brand">
        <a href="${BASE}/index.html" class="footer-logo">
          <p style="font-size: 20px; color: #7ed6ff"><strong>YTC - CLB Đào Tạo Kỹ Năng Trẻ</strong></p>
        </a>
        <p class="footer-tagline">“Nơi thắp sáng đam mê, tôi luyện kỹ năng và kết nối những trái tim nhiệt huyết trẻ UNETI.”</p>
        <div class="footer-org-badge">
          ${icon("landmark")} <span>Trực thuộc <strong>Đoàn TN – Hội SV UNETI</strong></span>
        </div>
      </div>

      <!-- Cột 2: Khám phá nhanh -->
      <div class="footer-col footer-col--links">
        <h4 class="footer-heading">Khám phá nhanh</h4>
        <ul class="footer-nav">
          <li><a href="${BASE}/index.html">${icon("home")} Trang chủ</a></li>
          <li><a href="${BASE}/about.html">${icon("sparkles")} Về chúng tôi</a></li>
          <li><a href="${BASE}/contest_event.html">${icon("trophy")} Cuộc thi & Sự kiện</a></li>
          <li><a href="${BASE}/news.html">${icon("newspaper")} Nhật ký hoạt động</a></li>
          <li><a href="${BASE}/member.html">${icon("users")} Thành viên</a></li>
          <li><a href="${BASE}/joinus.html" class="footer-highlight-link">${icon("rocket")} Thành viên Gen 15.1</a></li>
        </ul>
      </div>

      <!-- Cột 3: Kênh truyền thông -->
      <div class="footer-col footer-col--social">
        <h4 class="footer-heading">Kênh truyền thông</h4>
        <div class="footer-social-list">
          <a href="https://www.facebook.com/YoungTrainingClub" target="_blank" rel="noopener" class="footer-social-item" title="Fanpage CLB Đào tạo Kỹ năng Trẻ">
            <img src="${BASE}/Image/Facebook.png" class="social-icon" alt="Facebook YTC">
            <div class="social-info">
              <strong>Fanpage CLB YTC</strong>
              <span>@YoungTrainingClub</span>
            </div>
          </a>
          <a href="https://www.facebook.com/DoanTN.HoiSV.Uneti" target="_blank" rel="noopener" class="footer-social-item" title="Fanpage Đoàn Thanh niên - Hội Sinh viên UNETI">
            <img src="${BASE}/Image/Facebook.png" class="social-icon" alt="Facebook Đoàn UNETI">
            <div class="social-info">
              <strong>Đoàn TN UNETI</strong>
              <span>@DoanTN.HoiSV.Uneti</span>
            </div>
          </a>
          <a href="https://www.tiktok.com/@ytc.uneti" target="_blank" rel="noopener" class="footer-social-item" title="TikTok YTC Official">
            <img src="${BASE}/Image/Tiktok.png" class="social-icon" alt="TikTok YTC">
            <div class="social-info">
              <strong>TikTok YTC Official</strong>
              <span>@ytc.uneti</span>
            </div>
          </a>
          <a href="https://www.tiktok.com/@letanytc.uneti" target="_blank" rel="noopener" class="footer-social-item" title="TikTok Lễ Tân YTC">
            <img src="${BASE}/Image/Tiktok.png" class="social-icon" alt="TikTok Lễ Tân">
            <div class="social-info">
              <strong>TikTok Lễ Tân YTC</strong>
              <span>@letanytc.uneti</span>
            </div>
          </a>
        </div>
      </div>

      <!-- Cột 4: Thông tin liên hệ -->
      <div class="footer-col footer-col--contact">
        <h4 class="footer-heading">Thông tin liên hệ</h4>
        <ul class="footer-contact-list">
          <li>
            <span class="contact-icon">${icon("pin")}</span>
            <span><strong>Cơ sở Hà Nội:</strong> 218 Lĩnh Nam, P. Hoàng Mai, Hà Nội</span>
          </li>
          <li>
            <span class="contact-icon">${icon("pin")}</span>
            <span><strong>Cơ sở Nam Định:</strong> 353 Trần Hưng Đạo, P. Nam Định, Ninh Bình</span>
          </li>
          <li>
            <span class="contact-icon">${icon("mail")}</span>
            <span><strong>Email:</strong>
              <button type="button" class="copy-email-btn" data-email="genz.ytc@gmail.com" title="Bấm để sao chép email">
                genz.ytc@gmail.com <span class="copy-hint">${icon("clipboard")}</span>
              </button>
            </span>
          </li>
          <li>
            <span class="contact-icon">${icon("globe")}</span>
            <span><strong>Website UNETI:</strong> <a href="https://uneti.edu.vn" target="_blank" rel="noopener">uneti.edu.vn</a></span>
          </li>
        </ul>
      </div>

    </div>
  </div>

  <!-- Footer Bottom -->
  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <div class="footer-copyright">
        © 2026 <strong>CLB Đào tạo Kỹ năng Trẻ (YTC)</strong> – Trường Đại học Kinh tế - Kỹ thuật Công nghiệp.
      </div>
      <div id="visit-counter" class="visit-counter"></div>
    </div>
  </div>
</div>
`;

// ----- 3. Inject -----
const navPlaceholder = document.getElementById("nav-placeholder");
const footerPlaceholder = document.getElementById("footer-placeholder");

if (navPlaceholder) {
  navPlaceholder.innerHTML = navHTML;

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Đóng menu mobile khi bấm vào một liên kết
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
        navLinks.querySelectorAll(".has-dropdown.open").forEach(li => {
          li.classList.remove("open");
          li.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
        });
      });
    });

    // Mũi tên ▾ mở/đóng menu phụ (mobile & bàn phím)
    navLinks.querySelectorAll(".dropdown-toggle").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const item = btn.closest(".has-dropdown");
        const isOpen = item.classList.toggle("open");
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });

    // Bấm ra ngoài thì đóng menu phụ
    document.addEventListener("click", e => {
      if (!e.target.closest(".has-dropdown")) {
        navLinks.querySelectorAll(".has-dropdown.open").forEach(li => {
          li.classList.remove("open");
          li.querySelector(".dropdown-toggle")?.setAttribute("aria-expanded", "false");
        });
      }
    });
  }
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
  initVisitCounter();
  initCopyEmail();
}

// ----- 4. Copy email (nút trong footer) -----
function initCopyEmail() {
  const btn = document.querySelector(".copy-email-btn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    navigator.clipboard.writeText(btn.dataset.email);
    const orig = btn.innerHTML;
    btn.innerHTML = `${icon("check")} Đã copy!`;
    btn.classList.add("copied");
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.classList.remove("copied");
    }, 1800);
  });
}

// ----- 5. Visit Counter (hits.sh - free, no signup) -----
function initVisitCounter() {
  const counterEl = document.getElementById("visit-counter");
  if (!counterEl) return;

  // Khi đang code/chỉnh giao diện ở local thì không gọi hits.sh,
  // tránh badge bị vỡ do key không hợp lệ trên localhost
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    counterEl.innerHTML =
      '<span style="opacity:0.6;font-size:13px;">[Bộ đếm lượt truy cập]</span>';
    return;
  }

  const siteKey = `${window.location.hostname}${BASE}`;
  const label = encodeURIComponent("Lượt truy cập");
  const badgeUrl =
    `https://hits.sh/${siteKey}.svg` +
    `?style=flat-square&label=${label}&color=0e7490`;

  const img = document.createElement("img");
  img.src = badgeUrl;
  img.alt = "Lượt truy cập website";
  img.loading = "lazy";
  img.style.height = "24px";

  img.onerror = () => {
    counterEl.innerHTML =
      '<span style="opacity:0.6;font-size:13px;">' +
      "Không tải được bộ đếm lượt truy cập" +
      "</span>";
  };

  counterEl.appendChild(img);
}

// ----- Disable Right Click -----
document.addEventListener("contextmenu", e => e.preventDefault());

// ----- Scroll fade-in (shared across all pages, incl. contest pages) -----
const fadeInEls = document.querySelectorAll(".fade-in");
if (fadeInEls.length) {
  const fadeInObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeInObserver.unobserve(entry.target); // đã hiện thì thôi theo dõi, đỡ tốn tài nguyên
        }
      });
    },
    { threshold: 0.08 }
  );
  fadeInEls.forEach(el => fadeInObserver.observe(el));
}