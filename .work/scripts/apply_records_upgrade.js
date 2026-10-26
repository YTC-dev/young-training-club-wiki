const fs = require('fs');
const path = 'D:/YTC/quiz-game.html';
const backupDir = 'D:/YTC/.work/backups';
fs.mkdirSync(backupDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.copyFileSync(path, `${backupDir}/quiz-game.before-records-${stamp}.html`);
let text = fs.readFileSync(path, 'utf8');
function replaceOnce(oldText, newText, label) {
  if (!text.includes(oldText)) throw new Error(`Không tìm thấy marker: ${label}`);
  text = text.replace(oldText, newText);
}

replaceOnce(`  </div>\n</section>\n\n<!-- ====================== GAME SCREEN ====================== -->`, `  </div>\n\n  <div class="test-note" role="note">\n    <strong>NOTE GAME</strong> Đây là phiên bản kiểm thử trò chơi minigame của trang web này. Các thông tin, nội dung có thể thay đổi trong phiên bản ra mắt.\n  </div>\n\n  <section class="records-panel" aria-labelledby="recordsTitle">\n    <div class="records-heading">\n      <div><span class="records-kicker">YTC QUIZ RACE</span><h2 id="recordsTitle">THÀNH TÍCH CỦA BẠN</h2></div>\n      <button class="records-clear" type="button" onclick="clearRecords()">XÓA KỶ LỤC</button>\n    </div>\n    <div class="records-grid">\n      <div class="record-column"><h3>HIGHSCORE</h3><ol id="highscoreList" class="highscore-list"><li class="record-empty">Chưa có kỷ lục</li></ol></div>\n      <div class="record-column"><h3>LỊCH SỬ CHƠI</h3><div id="historyList" class="history-list"><div class="record-empty">Chưa có lượt chơi</div></div></div>\n    </div>\n    <p class="records-message" id="recordsMessage" aria-live="polite"></p>\n  </section>\n</section>\n\n<!-- ====================== GAME SCREEN ====================== -->`, 'panel thành tích và note');

replaceOnce(`    <div class="gameover-actions">`, `    <div class="record-result" id="recordResult" aria-live="polite"></div>\n    <div class="gameover-actions">`, 'trạng thái kỷ lục cuối game');

const css = `
/* ===== Records, testing note & character presentation refresh ===== */
.test-note { width:min(100%,760px); margin:24px auto 0; padding:13px 17px; border:1px solid rgba(126,214,255,.28); border-left:3px solid #ffc94f; border-radius:13px; color:#d9eaff; background:rgba(9,28,57,.48); font-size:12px; line-height:1.6; text-align:left; box-shadow:0 10px 25px rgba(0,0,0,.12); }
.test-note strong { color:#ffc94f; letter-spacing:1.3px; margin-right:6px; }
.records-panel { width:min(100%,980px); margin:34px auto 0; padding:22px; border:1px solid rgba(255,255,255,.16); border-radius:22px; background:rgba(8,25,52,.62); box-shadow:0 18px 45px rgba(0,0,0,.18); backdrop-filter:blur(14px); text-align:left; }
.records-heading { display:flex; align-items:flex-end; justify-content:space-between; gap:16px; margin-bottom:17px; }
.records-kicker { color:#72dcf7; font-size:10px; font-weight:900; letter-spacing:1.8px; }
.records-heading h2 { margin-top:4px; color:#fff; font-size:clamp(19px,3vw,26px); letter-spacing:-.03em; }
.records-clear { border:1px solid rgba(255,201,79,.55); border-radius:10px; padding:9px 12px; color:#ffe5a3; background:rgba(255,201,79,.1); font-size:10px; font-weight:900; letter-spacing:.7px; cursor:pointer; transition:.2s ease; }
.records-clear:hover { color:#182b45; background:#ffc94f; transform:translateY(-2px); }
.records-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; }
.record-column { min-width:0; padding:15px; border:1px solid rgba(255,255,255,.11); border-radius:16px; background:rgba(255,255,255,.055); }
.record-column h3 { margin-bottom:11px; color:#ffc94f; font-size:11px; letter-spacing:1.4px; }
.highscore-list { list-style:none; display:grid; gap:7px; padding:0; margin:0; counter-reset:rank; }
.highscore-list li { counter-increment:rank; display:grid; grid-template-columns:25px 1fr auto; align-items:center; gap:8px; color:#e4efff; font-size:12px; }
.highscore-list li::before { content:counter(rank, decimal-leading-zero); color:#72dcf7; font-weight:900; }
.highscore-list .record-score { color:#ffc94f; font-weight:900; font-variant-numeric:tabular-nums; }
.history-list { display:grid; gap:7px; max-height:190px; overflow:auto; padding-right:3px; }
.history-item { display:flex; justify-content:space-between; gap:10px; padding:8px 9px; border-radius:9px; color:#dceaff; background:rgba(255,255,255,.06); font-size:11px; }
.history-item strong { color:#fff; font-size:12px; }
.history-item span { color:#9db5d6; white-space:nowrap; }
.record-empty { color:#9db5d6; font-size:12px; }
.records-message { min-height:17px; margin:12px 0 0; color:#72dcf7; font-size:11px; font-weight:800; }
.record-result { min-height:20px; margin:-8px 0 14px; color:#b06cff; font-size:13px; font-weight:900; }
.char-card { text-align:left; padding:15px; background:linear-gradient(145deg,#f8fbff,#e8f2ff); }
.char-card-head { display:flex; align-items:center; justify-content:space-between; margin-bottom:11px; }
.char-index { color:#7892b2; font-size:10px; font-weight:900; letter-spacing:1px; }
.char-tag { border-radius:999px; padding:4px 7px; color:#2864d7; background:#e1f3ff; font-size:9px; font-weight:900; letter-spacing:.5px; }
.char-avatar-big.has-photo { width:78px; height:78px; overflow:hidden; background:#d9efff; }
.char-avatar-big.has-photo img { width:100%; height:100%; object-fit:cover; }
.char-card .char-name { font-size:15px; line-height:1.2; min-height:36px; }
.char-card .char-role { min-height:28px; margin-bottom:8px; }
.char-ability-label { display:block; margin-bottom:3px; color:#9b6b00; font-size:9px; font-weight:900; letter-spacing:1px; }
.char-card .char-ability { min-height:66px; }
@media (max-width:600px) { .records-panel { padding:16px; } .records-heading { align-items:flex-start; flex-direction:column; } .records-clear { width:100%; } .records-grid { grid-template-columns:1fr; } }
`;
replaceOnce('</style>', css + '</style>', 'CSS thành tích và character card');

const qMarker = `  { type: 'choice', q: 'Nội dung nào là một hoạt động chính của YTC?', options: ['Cuộc thi MC - Giọng nói','Đua xe địa hình','Thi đấu cờ vua quốc tế','Triển lãm robot'], answer: 0 },\n];`;
const qExtended = `  { type: 'choice', q: 'Nội dung nào là một hoạt động chính của YTC?', options: ['Cuộc thi MC - Giọng nói','Đua xe địa hình','Thi đấu cờ vua quốc tế','Triển lãm robot'], answer: 0 },
  { type: 'choice', q: 'Mỗi năm YTC tổ chức khoảng bao nhiêu mùa Podcast & Phim?', options: ['1 mùa','2 mùa','5 mùa','8 mùa'], answer: 1 },
  { type: 'choice', q: 'Cuộc thi Rewrite Destiny thuộc Gen nào của YTC?', options: ['Gen 12.1','Gen 13.2','Gen 14.1','Gen 15.1'], answer: 2 },
  { type: 'choice', q: 'Đội giành giải nhất cuộc thi Rewrite Destiny là đội nào?', options: ['Good Vibes Tribe','Together We Rise','THE INNOVATORS','OneTeam'], answer: 0 },
  { type: 'choice', q: 'Đội giành giải nhất cuộc thi Voice Your Mind là đội nào?', options: ['Crew 1718','Biệt Đội Xanh','Good Vibes Tribe','Together We Rise'], answer: 3 },
  { type: 'choice', q: 'Tô Thu Trang đạt thành tích nào tại UNETI GOT TALENT 2026?', options: ['Top 20 Chung Kết','Giải nhất','Giải nhì','Giải yêu thích nhất'], answer: 0 },
  { type: 'choice', q: 'Đội thi của Nguyễn Thị Hồng Quyên tại MARKET MAKER 2026 có tên là gì?', options: ['WINX','YoungBoost','FinFin Mind','THE LIGHT'], answer: 0 },
  { type: 'fill', q: 'Chuyến dã ngoại YTC 2026 diễn ra từ ngày ___ đến 01/07/2026.', answer: '30/06', accept: ['30/06','30-06','30 tháng 6'] },
  { type: 'fill', q: '“Chuyến tàu thời gian” là đêm sinh nhật lần thứ mấy của YTC?', answer: '14', accept: ['14','mười bốn'] },
  { type: 'choice', q: 'YTC đồng hành cùng chương trình nào dành cho thí sinh trước kỳ thi năm 2026?', options: ['Tiếp Sức Mùa Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },
];`;
replaceOnce(qMarker, qExtended, 'câu hỏi cuộc thi và hoạt động');

const companionMarker = `const COMPANIONS = [`;
// Add image metadata in a separate map so existing companion data stays readable.
replaceOnce(`${companionMarker}`, `const COMPANION_IMAGES = {\n  minh: 'Image/BCN Gen14/BuiQuangMinh.jpg', hang: 'Image/BCN Gen14/DaoThiThuHang.jpg', thoanh: 'Image/BCN Gen14/PhamThiThaoAnh.jpg', trang: 'Image/BCN Gen14/ToThuTrang.jpg', phuonglinh: 'Image/BCN Gen14/DangThiPhuongLinh.jpg', dung: 'Image/BCN Gen14/TranManhDung.jpg', anh: 'Image/BCN Gen14/NguyenMinhAnh.jpg', phuonganh: 'Image/BCN Gen14/LeThiPhuongAnh.jpg', nhatminh: 'Image/BCN Gen14/VuXuanNhatMinh.jpg', nguyenphuonganh: 'Image/BCN Gen14/NguyenPhuongAnh.jpg', halinh: 'Image/BCN Gen14/HoangThiHaLinh.jpg'\n};\n\n${companionMarker}`, 'metadata ảnh đồng hành');

const oldCard = `    row.className = 'companion-row';\n    row.innerHTML = \`\n      <div class="companion-avatar">\${c.avatar}</div>\n      <div class="companion-info">\n        <div class="companion-name">\${c.name}</div>\n        <div class="companion-ability">\${c.ability}</div>\n      </div>\`;`;
const newCard = `    row.className = 'companion-row';\n    const image = COMPANION_IMAGES[c.id];\n    row.innerHTML = \`\n      <div class="companion-avatar\${image ? ' has-photo' : ''}">\${image ? \`<img src="\${image}" alt="\${c.name}" loading="lazy">\` : c.avatar}</div>\n      <div class="companion-info">\n        <div class="companion-name">\${c.name}</div>\n        <div class="companion-ability">\${c.ability}</div>\n      </div>\`;`;
replaceOnce(oldCard, newCard, 'card đồng hành trong panel');

const newModal = `      const image = COMPANION_IMAGES[c.id];\n      card.innerHTML = \`\n        <div class="char-card-head"><span class="char-index">YTC / \${String(COMPANIONS.indexOf(c) + 1).padStart(2, '0')}</span><span class="char-tag">ĐỒNG HÀNH</span></div>\n        <div class="char-avatar-big\${image ? ' has-photo' : ''}">\${image ? \`<img src="\${image}" alt="\${c.name}" loading="lazy">\` : c.avatar}</div>\n        <div class="char-name">\${c.name}</div>\n        <div class="char-role">\${c.role}</div>\n        <div class="char-ability"><span class="char-ability-label">NĂNG LỰC</span>\${c.ability}</div>\`;`;
const modalPattern = /    card\.innerHTML = `\r?\n      <div class="char-avatar-big">\$\{c\.avatar\}<\/div>\r?\n      <div class="char-name">\$\{c\.name\}<\/div>\r?\n      <div class="char-role">\$\{c\.role\}<\/div>\r?\n      <div class="char-ability">\$\{c\.ability\}<\/div>`;/;
if (!modalPattern.test(text)) throw new Error('Không tìm thấy marker: card chọn nhân vật');
text = text.replace(modalPattern, newModal);

const recordsCode = `
/* ============================================================
   LOCAL RECORDS — highscore & play history
   ============================================================ */
const HIGHSCORE_KEY = 'ytcQuizRaceHighscores';
const HISTORY_KEY = 'ytcQuizRaceHistory';
function readRecords(key) { try { const value = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(value) ? value : []; } catch { return []; } }
function writeRecords(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
function formatRecordDate(iso) { try { return new Intl.DateTimeFormat('vi-VN', { day:'2-digit', month:'2-digit', year:'numeric', hour:'2-digit', minute:'2-digit' }).format(new Date(iso)); } catch { return iso; } }
function renderRecords() {
  const highscore = readRecords(HIGHSCORE_KEY).sort((a,b) => b.score - a.score || b.step - a.step || b.correct - a.correct).slice(0, 5);
  const history = readRecords(HISTORY_KEY).sort((a,b) => new Date(b.playedAt) - new Date(a.playedAt)).slice(0, 8);
  const highscoreList = document.getElementById('highscoreList');
  const historyList = document.getElementById('historyList');
  if (!highscoreList || !historyList) return;
  highscoreList.innerHTML = highscore.length ? highscore.map(item => \`<li><span>\${item.correct}/\${item.total} đúng</span><span class="record-score">\${Number(item.score).toLocaleString('vi-VN')} điểm</span></li>\`).join('') : '<li class="record-empty">Chưa có kỷ lục</li>';
  historyList.innerHTML = history.length ? history.map(item => \`<div class="history-item"><span><strong>\${Number(item.score).toLocaleString('vi-VN')} điểm</strong><br>\${item.step}/50 ô · \${item.correct}/\${item.total} đúng</span><span>\${formatRecordDate(item.playedAt)}</span></div>\`).join('') : '<div class="record-empty">Chưa có lượt chơi</div>';
}
function saveRunRecord() {
  const record = { score: state.score, step: state.step, correct: state.correctCount, total: state.questions.length, reachedFinish: state.reachedFinish, companions: state.companions.slice(), playedAt: new Date().toISOString() };
  const history = [record, ...readRecords(HISTORY_KEY)].slice(0, 20);
  const highscore = [record, ...readRecords(HIGHSCORE_KEY)].sort((a,b) => b.score - a.score || b.step - a.step || b.correct - a.correct).slice(0, 10);
  writeRecords(HISTORY_KEY, history); writeRecords(HIGHSCORE_KEY, highscore); renderRecords();
  const best = highscore[0] && highscore[0].playedAt === record.playedAt && highscore[0].score === record.score;
  const result = document.getElementById('recordResult');
  if (result) result.textContent = best ? 'KỶ LỤC MỚI — Bạn đang đứng đầu bảng điểm trên thiết bị này.' : 'Kết quả đã được lưu vào lịch sử chơi trên thiết bị này.';
}
function clearRecords() {
  if (!confirm('Xóa toàn bộ highscore và lịch sử chơi trên thiết bị này?')) return;
  localStorage.removeItem(HIGHSCORE_KEY); localStorage.removeItem(HISTORY_KEY); renderRecords();
  const message = document.getElementById('recordsMessage'); if (message) message.textContent = 'Đã xóa highscore và lịch sử chơi.';
  const result = document.getElementById('recordResult'); if (result) result.textContent = '';
}
`;
replaceOnce('/* ============================================================\n   END GAME\n   ============================================================ */', recordsCode + '\n/* ============================================================\n   END GAME\n   ============================================================ */', 'logic records');
replaceOnce(`  document.getElementById('finalCompanions').textContent = state.companions.length + ' người';`, `  document.getElementById('finalCompanions').textContent = state.companions.length + ' người';\n  saveRunRecord();`, 'lưu kết quả');
replaceOnce('</script>', '\nrenderRecords();\n</script>', 'render records lúc mở trang');
fs.writeFileSync(path, text, 'utf8');
console.log(`UPDATED ${path} (${fs.statSync(path).size} bytes)`);
