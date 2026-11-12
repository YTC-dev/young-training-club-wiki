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

    <ul class="nav-links" id="primary-navigation">
      <li><a href="${BASE}/index.html">Trang chủ</a></li>
      <li class="has-dropdown">
        <a href="${BASE}/about.html">Giới thiệu</a>
        <button type="button" class="dropdown-toggle" aria-label="Mở menu Giới thiệu" aria-expanded="false"></button>
        <ul class="dropdown">
          <li><a href="${BASE}/wiki.html">Tổng quan về Wiki</a></li>
        </ul>
      </li>
      <li class="has-dropdown">
      <a href="${BASE}/news.html">Hoạt động</a>
      <button type="button" class="dropdown-toggle" aria-label="Mở menu Hoạt động" aria-expanded="false"></button>
        <ul class="dropdown">
          <li><a href="${BASE}/contest_event.html">Cuộc thi</a></li>
          <li><a href="${BASE}/GocVangVinhDanh.html">Góc vàng vinh danh</a></li>
        </ul>
      </li>
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
      <li><a href="${BASE}/quiz-game.html" target="_blank" rel="noopener">Minigame</a></li>
      <li><a href="${BASE}/joinus.html"><b>Tham gia</b></a></li>
      <li class="nav-search-mobile"><button class="global-search-menu-trigger" type="button"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><span>Tìm kiếm toàn trang</span></button></li>
    </ul>

    <button class="global-search-trigger" type="button" aria-label="Tìm kiếm toàn trang" title="Tìm kiếm toàn trang">
      <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg>
      <span>Tìm kiếm</span>
    </button>

    <div class="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>

  </div>
  <dialog class="global-search-dialog" aria-label="Tìm kiếm toàn trang">
    <div class="global-search-panel">
      <div class="global-search-heading"><label for="global-search-input">Tìm kiếm trên YTC Wiki</label><button class="global-search-close" type="button" aria-label="Đóng tìm kiếm">×</button></div>
      <div class="global-search-field"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><input id="global-search-input" type="search" placeholder="Tìm bài viết, sự kiện, thành viên..." autocomplete="off" aria-describedby="global-search-status"></div>
      <p class="global-search-status" id="global-search-status" role="status">Nhập từ khóa để tìm trong toàn bộ website.</p>
      <div class="global-search-results" id="global-search-results"></div>
      <div class="global-search-hint">Dùng phím <kbd>↑</kbd> <kbd>↓</kbd> để di chuyển, <kbd>Enter</kbd> để mở, <kbd>Esc</kbd> để đóng</div>
    </div>
  </dialog>
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
        <p class="footer-tagline">Ý TƯỞNG LỚN - TÀI NĂNG TRẺ - CHUNG NIỀM TIN</p>
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
          <li><a href="${BASE}/quiz-game.html" target="_blank" rel="noopener">${icon("sparkles")} Minigame</a></li>
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
          <a href="https://www.tiktok.com/@letanytc.uneti" target="_blank" rel="noopener" class="footer-social-item" title="TikTok MC - Lễ Tân YTC">
            <img src="${BASE}/Image/Tiktok.png" class="social-icon" alt="TikTok MC - Lễ Tân">
            <div class="social-info">
              <strong>TikTok MC - Lễ Tân YTC</strong>
              <span>@letanytc.uneti</span>
            </div>
          </a>
          <a href="https://www.tiktok.com/@tr.ytc5" target="_blank" rel="noopener" class="footer-social-item" title="TikTok Trẻ YTC">
            <img src="${BASE}/Image/Tiktok.png" class="social-icon" alt="TikTok Trẻ YTC">
            <div class="social-info">
              <strong>TikTok Trẻ YTC</strong>
              <span>@tr.ytc5</span>
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
  initGlobalSearch();

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    const closeMenu = () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Mở menu điều hướng");
      document.body.classList.remove("nav-open");
    };

    hamburger.addEventListener("click", () => {
      const isOpen = !navLinks.classList.contains("active");
      hamburger.classList.toggle("active", isOpen);
      navLinks.classList.toggle("active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
      hamburger.setAttribute("aria-label", isOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng");
      document.body.classList.toggle("nav-open", isOpen);
    });

    // Đóng menu mobile khi bấm vào một liên kết
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
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

    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1080) closeMenu();
    }, { passive: true });
  }
}

if (footerPlaceholder) {
  footerPlaceholder.innerHTML = footerHTML;
  initVisitCounter();
  initCopyEmail();
}

// ----- Global Search -----
function initGlobalSearch() {
  const trigger = document.querySelector(".global-search-trigger");
  const dialog = document.querySelector(".global-search-dialog");
  const input = document.getElementById("global-search-input");
  const results = document.getElementById("global-search-results");
  const status = document.getElementById("global-search-status");
  if (!trigger || !dialog || !input || !results || !status) return;
  let indexPromise, activeResult = -1;
  const normalize = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase();
  const loadIndex = () => indexPromise ||= fetch(`${BASE}/Asset/search-index.json`).then(r => { if (!r.ok) throw new Error(); return r.json(); });
  const esc = value => String(value).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
  function render(query) {
    const terms = normalize(query).trim().split(/\s+/).filter(Boolean);
    results.innerHTML = ""; activeResult = -1;
    if (!terms.length) { status.textContent = "Nhập từ khóa để tìm trong toàn bộ website."; return; }
    status.textContent = "Đang tìm kiếm...";
    loadIndex().then(pages => {
      const matched = pages.map(page => {
        const title = normalize(page.title), text = normalize(page.text);
        if (!terms.every(term => title.includes(term) || text.includes(term))) return null;
        const score = terms.reduce((n, term) => n + (title.includes(term) ? 8 : 0) + (text.includes(term) ? 1 : 0), 0) + (page.type === "detail" ? 18 : 0);
        const raw = page.text || page.title, norm = normalize(raw);
        const at = terms.reduce((best, term) => { const i = norm.indexOf(term); return i >= 0 ? Math.min(best, i) : best; }, raw.length);
        const start = Math.max(0, at - 55);
        const snippet = `${start ? "…" : ""}${raw.slice(start, start + 160).replace(/\s+/g, " ").trim()}${start + 160 < raw.length ? "…" : ""}`;
        return { ...page, score, snippet };
      }).filter(Boolean);
      const detailedPages = new Set(matched.filter(page => page.type === "detail").map(page => page.url.split("#")[0]));
      const matches = matched.filter(page => !(page.type === "overview" && detailedPages.has(page.url)))
        .sort((a,b) => b.score-a.score || a.title.localeCompare(b.title,"vi")).slice(0,12);
      if (!matches.length) { status.textContent = `Không tìm thấy kết quả cho “${query.trim()}”.`; return; }
      status.textContent = `${matches.length} kết quả phù hợp${matches.length===12 ? " (hiển thị tối đa 12)" : ""}.`;
      results.innerHTML = matches.map(p => `<a class="global-search-result" href="${esc(BASE + "/" + p.url)}"><strong>${esc(p.title)}</strong><span>${esc(p.section)}</span><p>${esc(p.snippet)}</p></a>`).join("");
    }).catch(() => { status.textContent = "Chưa tải được dữ liệu tìm kiếm. Hãy mở website qua máy chủ web rồi thử lại."; });
  }
  const open = () => {
    document.getElementById("primary-navigation")?.classList.remove("active");
    const burger = document.querySelector(".hamburger");
    burger?.classList.remove("active");
    burger?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
    if (!dialog.open) dialog.showModal();
    input.value = ""; render(""); requestAnimationFrame(() => input.focus());
  };
  document.querySelectorAll(".global-search-trigger, .global-search-menu-trigger").forEach(button => button.addEventListener("click", open));
  dialog.querySelector(".global-search-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", e => { if (e.target === dialog) dialog.close(); });
  input.addEventListener("input", () => render(input.value));
  document.addEventListener("keydown", e => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==="k") { e.preventDefault(); open(); }
    if (!dialog.open || !["ArrowDown","ArrowUp","Enter"].includes(e.key)) return;
    const links=[...results.querySelectorAll("a")]; if (!links.length) return;
    if (e.key==="ArrowDown" || e.key==="ArrowUp") { e.preventDefault(); activeResult=(activeResult+(e.key==="ArrowDown"?1:-1)+links.length)%links.length; links.forEach((a,i)=>a.classList.toggle("is-active",i===activeResult)); links[activeResult].scrollIntoView({block:"nearest"}); }
    else if (activeResult>=0) { e.preventDefault(); links[activeResult].click(); }
  });
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
