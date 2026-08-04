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
<div class="footer-container">
  <div class="container">

      <div class="social-links">
        <p>
          <img src="${BASE}/Image/Facebook.png" class="social-icon" alt="Facebook">
          Fanpage CLB:
          <a href="https://www.facebook.com/YoungTrainingClub" target="_blank">
          https://www.facebook.com/YoungTrainingClub
          </a><br>

          <img src="${BASE}/Image/Facebook.png" class="social-icon" alt="Facebook">
          Fanpage Đoàn TN UNETI:
          <a href="https://www.facebook.com/DoanTN.HoiSV.Uneti" target="_blank">
          https://www.facebook.com/DoanTN.HoiSV.Uneti
          </a><br>

          <img src="${BASE}/Image/Tiktok.png" class="social-icon" alt="TikTok">
          TikTok CLB:
          <a href="https://www.tiktok.com/@ytc.uneti" target="_blank">
          https://www.tiktok.com/@ytc.uneti
          </a>
        </p>

        <p>
          ✉️ Email YTC [Nhấn để copy]:
          <b onclick="navigator.clipboard.writeText(this.innerText)">
            genz.ytc@gmail.com
          </b>
        </p>

        <p>
          🌐 Website Trường:
          <a href="https://uneti.edu.vn" target="_blank">
            https://uneti.edu.vn
          </a>
        </p>
      </div>

      <br>

      <p>
        2026 © CLB Đào Tạo Kỹ Năng Trẻ YTC - Trường Đại học Kinh tế - Kỹ thuật Công nghiệp |
        All rights reserved.
      </p>

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
}

// ----- Disable Right Click -----
document.addEventListener("contextmenu", e => e.preventDefault());