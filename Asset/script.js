// =============================================
//  script.js – YTC Website
//  Nav & Footer nhúng thẳng, không dùng fetch()
//  Hoạt động ổn định trên GitHub Pages
// =============================================

// ----- 1. NAV HTML -----
const navHTML = `
<nav class="navbar">
  <div class="container nav-inner">

    <!-- LOGO ẢNH -->
    <div class="logo">
      <a href="../index.html">
        <img src="../Image/YTC-Long-Logo.png" alt="YTC - CLB Đào tạo Kỹ năng trẻ" class="responsive-img">
      </a>
    </div>

    <ul class="nav-links">
      <li><a href="../index.html">Trang chủ</a></li>
      <li><a href="../about.html">Giới thiệu</a></li>
      <li><a href="../contest_event.html">Cuộc thi</a></li>
      <li><a href="../news.html">Hoạt động</a></li>
      <li><a href="../member.html">Thành viên</a></li>
      <li><a href="../joinus.html"><b>Tham gia</b></a></li>
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
          <img src="/Image/Facebook.png" alt="Facebook" class="social-icon"> Fanpage CLB:
          <a href="https://www.facebook.com/YoungTrainingClub" target="_blank">https://www.facebook.com/YoungTrainingClub</a><br>

          <img src="/Image/Facebook.png" alt="Facebook" class="social-icon"> Fanpage Đoàn TN UNETI:
          <a href="https://www.facebook.com/DoanTN.HoiSV.Uneti" target="_blank">https://www.facebook.com/DoanTN.HoiSV.Uneti</a><br>

          <img src="/Image/Tiktok.png" alt="TikTok" class="social-icon"> TikTok CLB:
          <a href="https://www.tiktok.com/@ytc.uneti" target="_blank">https://www.tiktok.com/@ytc.uneti</a><br>
        </p>
        <p>✉️ Email YTC [Nhấn để copy]: <b onclick="navigator.clipboard.writeText(this.innerText)">genz.ytc@gmail.com</b></p>
        <p>🌐 Website Trường: <a href="https://uneti.edu.vn" target="_blank">https://uneti.edu.vn</a></p>
      </div><br>
      <p>2026 © CLB Đào Tạo Kỹ Năng Trẻ YTC - Trường Đại học Kinh tế - Kỹ thuật Công nghiệp | All rights reserved.</p>
  </div>
</div>
`;

// ----- 3. INJECT VÀO TRANG -----
const navPlaceholder = document.getElementById("nav-placeholder");
const footerPlaceholder = document.getElementById("footer-placeholder");

if (navPlaceholder) {
  navPlaceholder.innerHTML = navHTML;

  // Hamburger menu
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
    });

    // Đóng menu khi bấm vào link (mobile)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        hamburger.classList.remove("active");
      });
    });
  }
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
}

document.addEventListener('contextmenu', e => e.preventDefault());
