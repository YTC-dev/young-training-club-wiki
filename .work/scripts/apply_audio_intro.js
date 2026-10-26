const fs = require('fs');
const path = 'D:/YTC/quiz-game.html';
const backupDir = 'D:/YTC/.work/backups';
fs.mkdirSync(backupDir, { recursive: true });
const stamp = new Date().toISOString().replace(/[:.]/g, '-');
fs.copyFileSync(path, `${backupDir}/quiz-game.before-audio-${stamp}.html`);
let text = fs.readFileSync(path, 'utf8');
function r(oldText, newText, label) { if (!text.includes(oldText)) throw new Error(`Không tìm thấy marker: ${label}`); text = text.replace(oldText, newText); }

const css = `
/* ===== Companion avatar sizing fix, intro cards & sound feedback ===== */
.companion-avatar.has-photo { width:36px; height:36px; min-width:36px; min-height:36px; overflow:hidden; padding:0; }
.companion-avatar.has-photo img { display:block; width:100%; height:100%; max-width:none; object-fit:cover; object-position:center; }
.companion-intro-panel { width:min(100%,980px); margin:24px auto 0; padding:22px; border:1px solid rgba(255,255,255,.16); border-radius:22px; background:rgba(8,25,52,.62); box-shadow:0 18px 45px rgba(0,0,0,.18); backdrop-filter:blur(14px); text-align:left; }
.companion-intro-heading { display:flex; align-items:end; justify-content:space-between; gap:15px; margin-bottom:15px; }
.companion-intro-heading h2 { color:#fff; font-size:clamp(19px,3vw,26px); letter-spacing:-.03em; }
.companion-intro-heading p { margin-top:4px; color:#9db5d6; font-size:12px; }
.companion-intro-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; }
.intro-companion-card { display:grid; grid-template-columns:42px 1fr; gap:10px; align-items:center; min-width:0; padding:10px; border:1px solid rgba(255,255,255,.11); border-radius:13px; background:rgba(255,255,255,.055); transition:transform .2s ease, border-color .2s ease, background .2s ease; }
.intro-companion-card:hover { transform:translateY(-3px); border-color:rgba(114,220,247,.55); background:rgba(114,220,247,.1); }
.intro-companion-avatar { width:42px; height:42px; overflow:hidden; border-radius:50%; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#00bbfe,#273b93); color:#fff; font-size:12px; font-weight:900; border:2px solid rgba(255,255,255,.75); }
.intro-companion-avatar img { display:block; width:100%; height:100%; object-fit:cover; }
.intro-companion-name { color:#fff; font-size:11px; font-weight:900; line-height:1.2; }
.intro-companion-role { margin-top:3px; color:#72dcf7; font-size:9px; font-weight:800; line-height:1.25; }
.intro-companion-ability { grid-column:1 / -1; min-height:29px; color:#c8d9ef; font-size:10px; line-height:1.35; }
.ui-icon { width:1em; height:1em; max-width:1em; max-height:1em; flex:0 0 auto; vertical-align:-.14em; }
@media (max-width:760px) { .companion-intro-grid { grid-template-columns:repeat(2,1fr); } }
@media (max-width:500px) { .companion-intro-panel { padding:16px; } .companion-intro-grid { grid-template-columns:1fr; } .companion-intro-heading { align-items:flex-start; flex-direction:column; } }
`;
r('</style>', css + '</style>', 'CSS avatar và intro');

r(`  </section>\n</section>\n\n<!-- ====================== GAME SCREEN ====================== -->`, `  </section>\n\n  <section class="companion-intro-panel" aria-labelledby="companionIntroTitle">\n    <div class="companion-intro-heading">\n      <div><h2 id="companionIntroTitle">NGƯỜI ĐỒNG HÀNH</h2><p>Chọn đúng người, phát huy đúng năng lực trên đường đua YTC.</p></div>\n    </div>\n    <div id="companionIntroGrid" class="companion-intro-grid"></div>\n  </section>\n</section>\n\n<!-- ====================== GAME SCREEN ====================== -->`, 'khu vực giới thiệu đồng hành');

const audioCode = `
/* ============================================================
   SOUND EFFECTS — Web Audio, no external files required
   ============================================================ */
let ytcAudioContext = null;
function getAudioContext() { if (!ytcAudioContext) { const AudioCtx = window.AudioContext || window.webkitAudioContext; if (AudioCtx) ytcAudioContext = new AudioCtx(); } if (ytcAudioContext && ytcAudioContext.state === 'suspended') ytcAudioContext.resume(); return ytcAudioContext; }
function playSound(type) {
  const ctx = getAudioContext(); if (!ctx) return;
  const patterns = { start:[[392,.08,'sine',0],[523,.12,'sine',.09],[659,.16,'sine',.22]], correct:[[523,.09,'sine',0],[659,.12,'sine',.1],[784,.18,'sine',.22]], wrong:[[220,.14,'sawtooth',0],[165,.2,'sawtooth',.14]], dice:[[180,.05,'square',0],[240,.05,'square',.07],[300,.05,'square',.14]], select:[[392,.08,'triangle',0],[587,.16,'triangle',.09]], finish:[[523,.1,'sine',0],[659,.1,'sine',.11],[784,.1,'sine',.22],[1046,.28,'sine',.34]] };
  const notes = patterns[type] || patterns.select;
  const now = ctx.currentTime;
  notes.forEach(([frequency,duration,wave,offset]) => { const osc = ctx.createOscillator(); const gain = ctx.createGain(); osc.type = wave; osc.frequency.setValueAtTime(frequency, now + offset); gain.gain.setValueAtTime(.0001, now + offset); gain.gain.exponentialRampToValueAtTime(.09, now + offset + .01); gain.gain.exponentialRampToValueAtTime(.0001, now + offset + duration); osc.connect(gain); gain.connect(ctx.destination); osc.start(now + offset); osc.stop(now + offset + duration + .02); });
}
`;
r('function startGame() {', audioCode + `\nfunction startGame() {\n  playSound('start');`, 'sound code và start');
r(`function showFeedback(correct) {\n  const fb = document.getElementById('feedback');`, `function showFeedback(correct) {\n  playSound(correct ? 'correct' : 'wrong');\n  const fb = document.getElementById('feedback');`, 'âm thanh trả lời');
r(`function rollDice() {\n  return new Promise(resolve => {`, `function rollDice() {\n  playSound('dice');\n  return new Promise(resolve => {`, 'âm thanh xúc xắc');
r(`function pickCompanion(id) {\n  if (state.finished || state.companions.includes(id)) return;`, `function pickCompanion(id) {\n  if (state.finished || state.companions.includes(id)) return;\n  playSound('select');`, 'âm thanh chọn đồng hành');
r(`  if (target >= BOARD_SIZE && !state.reachedFinish) {\n    state.reachedFinish = true;`, `  if (target >= BOARD_SIZE && !state.reachedFinish) {\n    state.reachedFinish = true;\n    playSound('finish');`, 'âm thanh về đích');

const introCode = `
function renderCompanionIntro() {
  const grid = document.getElementById('companionIntroGrid'); if (!grid) return;
  grid.innerHTML = COMPANIONS.map(c => { const image = COMPANION_IMAGES[c.id]; return \`<article class="intro-companion-card"><div class="intro-companion-avatar">\${image ? \`<img src="\${image}" alt="\${c.name}" loading="lazy">\` : c.avatar}</div><div><div class="intro-companion-name">\${c.name}</div><div class="intro-companion-role">\${c.role}</div></div><div class="intro-companion-ability">\${c.ability}</div></article>\`; }).join('');
}
`;
r('function saveRunRecord() {', introCode + `\nfunction saveRunRecord() {`, 'hàm giới thiệu đồng hành');
r('renderRecords();\n</script>', 'renderRecords();\nrenderCompanionIntro();\n</script>', 'khởi tạo intro');
fs.writeFileSync(path, text, 'utf8');
console.log(`UPDATED ${path} (${fs.statSync(path).size} bytes)`);
