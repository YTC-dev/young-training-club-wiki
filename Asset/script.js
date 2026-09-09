// =============================================
//  script.js – YTC Website
//  GitHub Pages + Localhost Compatible
// =============================================

// Base URL
const BASE =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? ""
    : "/young-training-club-wiki";

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
      <li><a href="${BASE}/contest_event.html">Cuộc thi</a></li>
      <li><a href="${BASE}/news.html">Hoạt động</a></li>
      <li><a href="${BASE}/member.html">Thành viên</a></li>
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
          🏛️ <span>Trực thuộc <strong>Đoàn TN – Hội SV UNETI</strong></span>
        </div>
      </div>

      <!-- Cột 2: Khám phá nhanh -->
      <div class="footer-col footer-col--links">
        <h4 class="footer-heading">Khám phá nhanh</h4>
        <ul class="footer-nav">
          <li><a href="${BASE}/index.html">🏠 Trang chủ</a></li>
          <li><a href="${BASE}/about.html">✨ Về chúng tôi</a></li>
          <li><a href="${BASE}/contest_event.html">🏆 Cuộc thi & Sự kiện</a></li>
          <li><a href="${BASE}/news.html">📰 Nhật ký hoạt động</a></li>
          <li><a href="${BASE}/member.html">👥 Thành viên</a></li>
          <li><a href="${BASE}/joinus.html" class="footer-highlight-link">🚀 Tuyển thành viên Gen 15.1</a></li>
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
          <a href="https://www.tiktok.com/@letanytc.uneti" target="_blank" rel="noopener" class="footer-social-item" title="TikTok Ban Lễ Tân YTC">
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
            <span class="contact-icon">📍</span>
            <span><strong>Cơ sở Hà Nội:</strong> 218 Lĩnh Nam, P. Hoàng Mai, Hà Nội</span>
          </li>
          <li>
            <span class="contact-icon">📍</span>
            <span><strong>Cơ sở Nam Định:</strong> 353 Trần Hưng Đạo, P. Nam Định, Ninh Bình</span>
          </li>
          <li>
            <span class="contact-icon">✉️</span>
            <span><strong>Email:</strong> 
              <button type="button" class="copy-email-btn" onclick="navigator.clipboard.writeText('genz.ytc@gmail.com'); const orig = this.innerHTML; this.innerHTML='✓ Đã copy!'; this.classList.add('copied'); setTimeout(()=>{this.innerHTML=orig; this.classList.remove('copied')},1800);" title="Bấm để sao chép email">
                genz.ytc@gmail.com <span class="copy-hint">📋</span>
              </button>
            </span>
          </li>
          <li>
            <span class="contact-icon">🌐</span>
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

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
  initVisitCounter();
}

// ----- 4. Visit Counter (hits.sh - free, no signup) -----
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
