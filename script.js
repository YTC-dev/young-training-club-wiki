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

      <div id="visit-counter" class="visit-counter"></div>

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
      '<span style="opacity:0.6;font-size:14px;">[Bộ đếm lượt truy cập – chỉ hiện khi deploy]</span>';
    return;
  }

  // Lưu ý: siteKey là một PATH (vd: "ytc-dev.github.io/young-training-club-wiki"),
  // không phải 1 segment đơn lẻ, nên KHÔNG được encodeURIComponent() cả chuỗi này
  // (nếu không dấu "/" sẽ bị đổi thành "%2F" khiến hits.sh không nhận đúng key
  // -> badge lỗi/không hiện).
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

  // Nếu hits.sh lỗi mạng / bị trình chặn quảng cáo chặn thì vẫn hiện
  // thông báo thay vì im lặng biến mất
  img.onerror = () => {
    counterEl.innerHTML =
      '<span style="opacity:0.6;font-size:14px;">' +
      "Không tải được bộ đếm lượt truy cập" +
      "</span>";
  };

  counterEl.appendChild(img);
}

// ----- Disable Right Click -----
document.addEventListener("contextmenu", e => e.preventDefault());