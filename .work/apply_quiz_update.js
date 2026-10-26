const fs = require('fs');
const path = String.raw`D:\YTC\quiz-game.html`;
const backup = String.raw`D:\YTC\quiz-game.before-questions-sound.html`;
let text = fs.readFileSync(path, 'utf8');
fs.copyFileSync(path, backup);
function once(oldValue, newValue) {
  const count = text.split(oldValue).length - 1;
  if (count !== 1) throw new Error(`Marker count ${count}: ${oldValue.slice(0, 100)}`);
  text = text.replace(oldValue, newValue);
}
once('.ui-icon { width:1em; height:1em; max-width:1em; max-height:1em; flex:0 0 auto; vertical-align:-.14em; }', `.ui-icon { width:1em; height:1em; max-width:1em; max-height:1em; flex:0 0 auto; vertical-align:-.14em; }
.sound-toggle { display:inline-flex; align-items:center; justify-content:center; gap:7px; min-width:132px; margin-top:23px; padding:14px 16px; border:1px solid rgba(214,239,255,.45); border-radius:12px; color:#eaf6ff; background:rgba(255,255,255,.08); font-size:13px; font-weight:800; cursor:pointer; transition:transform .2s,background .2s,border-color .2s; }
.sound-toggle:hover { transform:translateY(-2px); background:rgba(255,255,255,.16); border-color:rgba(214,239,255,.75); }
.sound-toggle.is-muted { color:#b7c9df; border-color:rgba(183,201,223,.28); background:rgba(255,255,255,.04); }
.sound-toggle:focus-visible { outline:3px solid #ffbd38; outline-offset:3px; }`);
once('@media (max-width:500px) { .companion-intro-panel { padding:16px; } .companion-intro-grid { grid-template-columns:1fr; } .companion-intro-heading { align-items:flex-start; flex-direction:column; } }', '@media (max-width:500px) { .companion-intro-panel { padding:16px; } .companion-intro-grid { grid-template-columns:1fr; } .companion-intro-heading { align-items:flex-start; flex-direction:column; } .sound-toggle { width:100%; margin-top:12px; } }');
const startButton = /(<button class="btn-start" onclick="startGame\(\)">[\s\S]*?<\/button>)/;
if (!startButton.test(text)) throw new Error('start button marker missing');
text = text.replace(startButton, `$1\n    <button class="sound-toggle" id="soundToggle" type="button" onclick="toggleSound()" aria-pressed="true"><span aria-hidden="true">🔊</span> ÂM THANH: BẬT</button>`);
once("  { type: 'choice', q: 'YTC đồng hành cùng chương trình nào dành cho thí sinh trước kỳ thi năm 2026?', options: ['Tiếp Sức Mùa Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },\n];", `  { type: 'choice', q: 'YTC đồng hành cùng chương trình nào dành cho thí sinh trước kỳ thi năm 2026?', options: ['Tiếp Sức Mùa Thi','UNETI CUP','Rising Voice','Market Maker'], answer: 0 },

  // ----- Câu hỏi mở rộng từ Wiki và Facebook YTC -----
  { type: 'choice', q: 'Ai được bình chọn là thí sinh được yêu thích nhất tại Rising Voice 2025?', options: ['Tô Thu Trang','Nguyễn Minh Ánh','Ngô Hạnh Nguyên','Nguyễn Thị Thanh Hoa'], answer: 2 },
  { type: 'choice', q: 'YTC tổ chức khoảng bao nhiêu sự kiện mỗi năm?', options: ['10+','20+','30+','50+'], answer: 2 },
  { type: 'choice', q: 'Hoạt động nào thuộc nhóm “Gắn kết & Trải nghiệm” của YTC?', options: ['Dã ngoại và team building','Thi đấu bóng đá chuyên nghiệp','Triển lãm công nghệ','Câu lạc bộ ngoại ngữ'], answer: 0 },
  { type: 'choice', q: 'Trang Facebook Young Training Club giới thiệu YTC thuộc trường đại học nào?', options: ['Đại học Kinh tế Quốc dân','Đại học Kinh tế - Kỹ thuật Công nghiệp','Đại học Bách khoa Hà Nội','Đại học Thương mại'], answer: 1 },
  { type: 'choice', q: 'Bài đăng gần đây trên Facebook YTC nhắc đến lễ phát động cuộc thi về chủ đề nào?', options: ['Sử dụng năng lượng tiết kiệm và hiệu quả','Khởi nghiệp sinh viên','Nhiếp ảnh trẻ','Văn nghệ học đường'], answer: 0 },
  { type: 'fill', q: 'YTC được thành lập ngày 23/04 năm ___', answer: '2012', accept: ['2012'] },
  { type: 'fill', q: 'Tên tiếng Anh của cuộc thi MC - Giọng nói là ___', answer: 'Rising Voice', accept: ['rising voice','risingvoice'] },
  { type: 'word', q: 'Sắp xếp các mảng hoạt động theo thứ tự xuất hiện trên Wiki YTC:', pool: ['Sáng tạo & Media','Kỹ năng & Sân khấu','Nhiệt huyết & Cống hiến','Gắn kết & Trải nghiệm'], answer: ['Sáng tạo & Media','Kỹ năng & Sân khấu','Nhiệt huyết & Cống hiến','Gắn kết & Trải nghiệm'] },
];`);
const soundStart = text.indexOf('let ytcAudioContext = null;');
const soundEnd = text.indexOf('\nfunction startGame()', soundStart);
if (soundStart < 0 || soundEnd < 0) throw new Error('sound block marker missing');
const soundBlock = `let ytcAudioContext = null;
let ytcSoundEnabled = localStorage.getItem('ytcSoundEnabled') !== '0';
function getAudioContext() { if (!ytcAudioContext) { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (AudioCtx) ytcAudioContext = new AudioCtx(); } if (ytcAudioContext && ytcAudioContext.state === 'suspended') ytcAudioContext.resume(); return ytcAudioContext; }
function playSound(type) {
  if (!ytcSoundEnabled) return;
  const ctx = getAudioContext(); if (!ctx) return;
  const patterns = { start:[[392,.08,'sine',0],[523,.12,'sine',.09],[659,.16,'sine',.22]], correct:[[523,.09,'sine',0],[659,.12,'sine',.1],[784,.18,'sine',.22]], wrong:[[220,.14,'sawtooth',0],[165,.2,'sawtooth',.14]], dice:[[180,.05,'square',0],[240,.05,'square',.07],[300,.05,'square',.14]], select:[[392,.08,'triangle',0],[587,.16,'triangle',.09]], click:[[660,.035,'sine',0]], countdown:[[330,.08,'triangle',0],[440,.1,'triangle',.1]], finish:[[523,.1,'sine',0],[659,.1,'sine',.11],[784,.1,'sine',.22],[1046,.28,'sine',.34]] };
  const notes = patterns[type] || patterns.select;
  const now = ctx.currentTime;
  notes.forEach(([frequency,duration,wave,offset]) => { const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = wave; osc.frequency.setValueAtTime(frequency, now + offset); gain.gain.setValueAtTime(.0001, now + offset); gain.gain.exponentialRampToValueAtTime(.09, now + offset + .01); gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(now + offset); osc.stop(now + offset + duration + .02); });
}
function updateSoundToggle() { const button = document.getElementById('soundToggle'); if (!button) return; button.classList.toggle('is-muted', !ytcSoundEnabled); button.setAttribute('aria-pressed', String(ytcSoundEnabled)); button.innerHTML = \`<span aria-hidden="true">\${ytcSoundEnabled ? '🔊' : '🔇'}</span> ÂM THANH: \${ytcSoundEnabled ? 'BẬT' : 'TẮT'}\`; }
function toggleSound() { ytcSoundEnabled = !ytcSoundEnabled; localStorage.setItem('ytcSoundEnabled', ytcSoundEnabled ? '1' : '0'); updateSoundToggle(); if (ytcSoundEnabled) playSound('select'); }
window.addEventListener('DOMContentLoaded', updateSoundToggle, { once: true });
`;
text = text.slice(0, soundStart) + soundBlock + text.slice(soundEnd);
once('  overlay.classList.add(\'show\');\n  number.textContent = count;', '  overlay.classList.add(\'show\');\n  number.textContent = count;\n  playSound(\'countdown\');');
once('    if (count > 0) {\n      number.textContent = count;', '    if (count > 0) {\n      number.textContent = count;\n      playSound(\'countdown\');');
once('  chip.classList.add(\'used\');\n  state.selectedWords.push(word);\n}', '  chip.classList.add(\'used\');\n  state.selectedWords.push(word);\n  playSound(\'click\');\n}');
once('  if (chip) chip.classList.remove(\'used\');\n}', '  if (chip) chip.classList.remove(\'used\');\n  playSound(\'click\');\n}');
once('function goNext() {\n  if (!state.answered || state.resolvingTurn || state.finished) return;', 'function goNext() {\n  if (!state.answered || state.resolvingTurn || state.finished) return;\n  playSound(\'click\');');
fs.writeFileSync(path, text, 'utf8');
console.log(`Updated ${path}; backup: ${backup}`);
