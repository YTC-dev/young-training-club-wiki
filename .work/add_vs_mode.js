const fs=require('fs');
const p=String.raw`D:\YTC\quiz-game.html`, b=String.raw`D:\YTC\quiz-game.before-vs.html`;
let t=fs.readFileSync(p,'utf8'); fs.copyFileSync(p,b);
function once(a,z){if(!t.includes(a))throw new Error('missing '+a.slice(0,80));t=t.replace(a,z)}
// CSS
once('.sound-toggle:focus-visible { outline:3px solid #ffbd38; outline-offset:3px; }', `.sound-toggle:focus-visible { outline:3px solid #ffbd38; outline-offset:3px; }
.mode-switcher { display:flex; justify-content:center; gap:10px; margin:18px auto 0; flex-wrap:wrap; }
.mode-btn { border:1px solid rgba(214,239,255,.45); border-radius:12px; padding:11px 18px; color:#eaf6ff; background:rgba(255,255,255,.08); font-weight:900; cursor:pointer; }
.mode-btn.active,.mode-btn:hover { color:#142f55; background:#ffe08a; border-color:#ffe08a; }
.vs-setup { position:fixed; inset:0; z-index:420; display:none; align-items:center; justify-content:center; padding:20px; background:rgba(5,16,36,.86); backdrop-filter:blur(10px); }
.vs-setup.show { display:flex; }
.vs-setup-card { width:min(100%,760px); max-height:90vh; overflow:auto; padding:26px; border-radius:22px; color:#eaf6ff; background:linear-gradient(145deg,#10294f,#123c71); box-shadow:0 24px 80px rgba(0,0,0,.4); }
.vs-setup-card h2 { color:#ffd05c; margin-bottom:8px; }
.vs-setup-card p { color:#cdeaff; font-size:13px; line-height:1.5; }
.vs-companion-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; margin:18px 0; }
.vs-companion-choice { padding:14px; border:1px solid rgba(255,255,255,.18); border-radius:15px; background:rgba(255,255,255,.07); cursor:pointer; }
.vs-companion-choice.selected { border-color:#ffd05c; background:rgba(255,208,92,.18); box-shadow:0 0 0 2px rgba(255,208,92,.2); }
.vs-companion-choice strong { display:block; color:#fff; margin-bottom:5px; }
.vs-companion-choice small { display:block; color:#b9d5ef; line-height:1.4; }
.vs-setup-actions { display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
.coin-result { min-height:28px; color:#ffd05c; font-weight:900; }
.vs-skill-card { display:none; }
.vs-mode .vs-skill-card { display:block; }
.vs-skill-btn { width:100%; margin-top:8px; padding:10px; border:0; border-radius:10px; color:#142f55; background:#ffd05c; font-weight:900; cursor:pointer; }
.vs-skill-btn:disabled { opacity:.45; cursor:not-allowed; }
.vs-status { display:none; color:#1b75a8; font-size:11px; font-weight:900; }
.vs-mode .vs-status { display:block; }
@media(max-width:600px){.vs-companion-grid{grid-template-columns:1fr}.vs-setup-card{padding:20px}.mode-btn{width:100%}}
`);
// mode chooser
once('  <p class="start-slogan">"Ý tưởng lớn - Tài năng trẻ - Chung niềm tin"<br>Trả lời đúng — Tung xúc xắc — Tiến về vạch đích!</p>', `  <p class="start-slogan">"Ý tưởng lớn - Tài năng trẻ - Chung niềm tin"<br>Trả lời đúng — Tung xúc xắc — Tiến về vạch đích!</p>
  <div class="mode-switcher" role="group" aria-label="Chọn chế độ chơi"><button class="mode-btn active" id="classicModeBtn" type="button" onclick="setGameMode('classic')">CLASSIC</button><button class="mode-btn" id="vsModeBtn" type="button" onclick="setGameMode('vs')">VS MODE</button></div>`);
// HUD bot + skill
once('      <div class="stat-chip timer-chip" id="timerChip">', `      <div class="stat-chip vs-status"><div class="label">Lượt</div><div class="value" id="turnVal">Bạn</div></div>
      <div class="stat-chip vs-status"><div class="label">Bot điểm</div><div class="value" id="botScoreVal">0</div></div>
      <div class="stat-chip timer-chip" id="timerChip">`);
once('      <!-- Companions -->', `      <div class="panel-card vs-skill-card"><div class="panel-title">KỸ NĂNG VS</div><div id="vsCompanionLabel" class="companion-ability">Chưa chọn</div><button class="vs-skill-btn" id="vsSkillBtn" type="button" onclick="useVSSkill()">DÙNG KỸ NĂNG</button><div id="vsCooldown" class="dice-result-text"></div></div>

      <!-- Companions -->`);
// setup modal before char modal
once('<!-- ====================== CHARACTER SELECT MODAL ====================== -->', `<!-- ====================== VS SETUP MODAL ====================== -->
<div class="vs-setup" id="vsSetup"><div class="vs-setup-card"><h2>VS MODE — ĐUA CÙNG BOT</h2><p>Chọn người đồng hành cho bạn. Bot cũng có thể chọn cùng nhân vật. Sau đó tung đồng xu để quyết định ai đi trước.</p><div id="vsCompanionChoices" class="vs-companion-grid"></div><div class="vs-setup-actions"><button class="btn-start" type="button" onclick="tossCoin()">TUNG ĐỒNG XU</button><button class="home-link" type="button" onclick="closeVSSetup()">HUỶ</button><span class="coin-result" id="coinResult"></span></div></div></div>

<!-- ====================== CHARACTER SELECT MODAL ====================== -->`);
// state
once('let state = {};', `let state = {};
let selectedGameMode = 'classic';
const VS_COMPANIONS = [
  { id:'hongthanh', name:'Nguyễn Hồng Thanh', ability:'Nội tại: đúng 3 lượt liên tiếp khiến bot mất lượt kế tiếp. Cooldown 2 lượt.' },
  { id:'thanhlan', name:'Nguyễn Thanh Lan', ability:'Kỹ năng: tung xúc xắc để bot lùi số bước. Cooldown 3 lượt.' },
  { id:'doantrang', name:'Lê Huyền Đoan Trang', ability:'Kỹ năng: cướp 1/4 điểm của bot. Cooldown 3 lượt.' }
];`);
once('    score: 0,', `    mode: 'classic',
    score: 0,`);
once('    finished: false,\n  };', `    finished: false,
    vs: { botScore:0, botStep:0, botCorrect:0, playerCompanion:null, botCompanion:null, playerTurn:true, stealMode:false, botQuestion:null, cooldowns:{ hongthanh:0, thanhlan:0, doantrang:0 }, streak:0, playerFinished:false, botFinished:false, botSkipped:false }
  };`);
// start game branch
once('function startGame() {\n  playSound(\'start\');', `function setGameMode(mode) { selectedGameMode = mode; document.body.classList.toggle('vs-mode', mode === 'vs'); document.getElementById('classicModeBtn').classList.toggle('active', mode === 'classic'); document.getElementById('vsModeBtn').classList.toggle('active', mode === 'vs'); }
function openVSSetup() { const grid=document.getElementById('vsCompanionChoices'); grid.innerHTML=''; window.vsSetupChoice=null; VS_COMPANIONS.forEach(c=>{const card=document.createElement('button'); card.type='button'; card.className='vs-companion-choice'; card.innerHTML=\`<strong>\${c.name}</strong><small>\${c.ability}</small>\`; card.onclick=()=>{window.vsSetupChoice=c.id; document.querySelectorAll('.vs-companion-choice').forEach(x=>x.classList.remove('selected')); card.classList.add('selected');}; grid.appendChild(card)}); document.getElementById('coinResult').textContent=''; document.getElementById('vsSetup').classList.add('show'); }
function closeVSSetup(){document.getElementById('vsSetup').classList.remove('show');}
function tossCoin(){ if(!window.vsSetupChoice){document.getElementById('coinResult').textContent='Hãy chọn người đồng hành trước.'; return;} const playerFirst=Math.random()<.5; document.getElementById('coinResult').textContent='Đồng xu: '+(playerFirst?'Bạn đi trước!':'Bot đi trước!'); setTimeout(()=>beginVSGame(playerFirst),900); }
function beginVSGame(playerFirst){ closeVSSetup(); playSound('start'); showLoading('Đang chuẩn bị VS mode...'); setTimeout(()=>{resetState(); state.mode='vs'; state.vs.playerCompanion=window.vsSetupChoice; state.vs.botCompanion=VS_COMPANIONS[Math.floor(Math.random()*VS_COMPANIONS.length)].id; state.vs.playerTurn=playerFirst; state.sessionId=(window.__ytcSessionId||0)+1; window.__ytcSessionId=state.sessionId; state.questions=buildQuestionDeck(); document.getElementById('startScreen').classList.remove('active'); document.getElementById('gameScreen').classList.add('active'); buildBoard(); renderCompanions(); updateTopbar(); updateVSHUD(); if(playerFirst){loadQuestion(false); runStartCountdown();} else {loadQuestion(false); runStartCountdown(); setTimeout(botTurn,4200);} hideLoading(); },720); }
function startGame() {
  if(selectedGameMode==='vs'){ openVSSetup(); return; }
  playSound('start');`);
// branch handlers
once('  showFeedback(correct);\n  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }', `  showFeedback(correct);
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }`);
once('  showFeedback(correct);\n  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }', `  showFeedback(correct);
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }`);
// third occurrence for word (replace remaining)
once('  showFeedback(correct);\n  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }', `  showFeedback(correct);
  if (state.mode === 'vs') { resolveVSPlayerAnswer(correct); return; }
  if (correct) { onCorrectAnswer(); revealNextButtonAfterCorrect(); }`);
// insert VS functions before getCorrectAnswerText
once('function getCorrectAnswerText(q) {', `function updateVSHUD(){if(state.mode!=='vs')return; const v=state.vs; document.getElementById('botScoreVal').textContent=v.botScore.toLocaleString('vi-VN'); document.getElementById('turnVal').textContent=v.playerTurn?'Bạn':'Bot'; const c=VS_COMPANIONS.find(x=>x.id===v.playerCompanion); document.getElementById('vsCompanionLabel').textContent=c?c.name+' — '+c.ability:'Chưa chọn'; const cd=v.cooldowns[v.playerCompanion]||0; document.getElementById('vsCooldown').textContent=cd?'Cooldown: '+cd+' lượt':'Sẵn sàng'; const btn=document.getElementById('vsSkillBtn'); btn.disabled=Boolean(cd)||!v.playerTurn||state.finished;}
function moveVS(who,steps){const v=state.vs; if(who==='player'){state.step=Math.min(BOARD_SIZE,state.step+steps);v.playerFinished=state.step>=BOARD_SIZE;}else{v.botStep=Math.min(BOARD_SIZE,v.botStep+steps);v.botFinished=v.botStep>=BOARD_SIZE;} updateTopbar(); updateVSHUD();}
function awardVSPlayer(){const bonus=state.vs.playerFinished&&!state.vs.botFinished?2:1; const pts=(POINTS_BASE+Math.round(POINTS_TIME_BONUS*(state.timeLeft/BASE_TIME)))*bonus; state.score+=pts; showFloatingPoints('Bạn +'+pts+(bonus===2?' (x2 về đích)':''),true); updateTopbar(); const steps=Math.floor(Math.random()*4)+1; moveVS('player',steps); playSound('dice');}
function awardVSBot(){const pts=POINTS_BASE+Math.floor(Math.random()*101); state.vs.botScore+=pts; const steps=Math.floor(Math.random()*4)+1; moveVS('bot',steps); state.vs.botCorrect++; showFloatingPoints('Bot +'+pts,false,'#ed5b69');}
function resolveVSPlayerAnswer(correct){const v=state.vs; if(v.stealMode){v.stealMode=false; if(correct){awardVSPlayer();} else {showFeedback(false);} finishVSRound(); return;} if(correct){v.streak++; awardVSPlayer(); if(v.streak>=3 && !v.botSkipped){v.botSkipped=true; v.cooldowns.hongthanh=2; document.getElementById('feedback').innerHTML+='\\nBot bị mất lượt bởi Nguyễn Hồng Thanh!'; finishVSRound(); return;}} else {v.streak=0; if(Math.random()<.65){setTimeout(()=>botTurn(true),700);return;}} finishVSRound();}
function finishVSRound(){state.resolvingTurn=true; updateVSHUD(); setTimeout(()=>{if(state.finished)return; state.qIndex++; if(state.qIndex>=state.questions.length|| (state.vs.playerFinished&&state.vs.botFinished)){endVSGame();return;} state.resolvingTurn=false; state.vs.playerTurn=true; loadQuestion(true); updateVSHUD();},1200);}
function botTurn(fromSteal=false){if(state.finished)return; const v=state.vs; v.playerTurn=false; updateVSHUD(); document.getElementById('answerArea').innerHTML=''; document.getElementById('qText').textContent='Lượt của Bot — đang suy nghĩ...'; document.getElementById('feedback').className='feedback info show'; document.getElementById('feedback').textContent='Bot đang trả lời câu hỏi riêng.'; setTimeout(()=>{if(state.finished)return; const correct=Math.random()<.68; if(correct){document.getElementById('feedback').textContent='Bot trả lời đúng và tung xúc xắc.'; awardVSBot(); finishVSRound();}else{document.getElementById('feedback').textContent='Bot trả lời sai — bạn được quyền cướp câu hỏi!'; state.currentQ=state.questions[(state.qIndex+1)%state.questions.length]; v.stealMode=true; renderAnswerArea(state.currentQ); state.answered=false; state.timeLeft=BASE_TIME; startTimer();}},900);}
function useVSSkill(){const v=state.vs; const id=v.playerCompanion; if(!id||v.cooldowns[id]||!v.playerTurn)return; if(id==='thanhlan'){const n=Math.floor(Math.random()*4)+1;v.botStep=Math.max(0,v.botStep-n);v.cooldowns[id]=3;showFloatingPoints('Thanh Lan: Bot lùi '+n+' bước',true,'#b06cff');}else if(id==='doantrang'){const stolen=Math.floor(v.botScore/4);v.botScore-=stolen;state.score+=stolen;v.cooldowns[id]=3;showFloatingPoints('Đoan Trang: cướp '+stolen+' điểm',true,'#b06cff');}else{v.botSkipped=true;v.cooldowns[id]=2;showFloatingPoints('Hồng Thanh: Bot mất lượt kế tiếp',true,'#b06cff');} updateTopbar();updateVSHUD();}
function endVSGame(){state.finished=true; clearInterval(state.timer); const winner=state.score===state.vs.botScore?'Hòa!':state.score>state.vs.botScore?'Bạn chiến thắng!':'Bot chiến thắng!'; document.getElementById('gameOverTitle').textContent=winner; document.getElementById('gameOverRank').textContent='Bạn '+state.score.toLocaleString('vi-VN')+' điểm — Bot '+state.vs.botScore.toLocaleString('vi-VN')+' điểm'; document.getElementById('finalScore').textContent=state.score.toLocaleString('vi-VN'); document.getElementById('finalStep').textContent=state.step+'/50'; document.getElementById('finalCorrect').textContent=state.correctCount+'/'+state.questions.length; document.getElementById('finalCompanions').textContent='VS'; document.getElementById('gameOverModal').classList.add('show'); playSound('gameover');}

function getCorrectAnswerText(q) {`);
// update topbar
once("function updateTopbar() {\n  document.getElementById('scoreVal').textContent = state.score.toLocaleString('vi-VN');\n  document.getElementById('stepVal').textContent = state.step + '/50';\n  document.getElementById('stepNowBadge').textContent = 'Ô ' + state.step;\n}", "function updateTopbar() {\n  document.getElementById('scoreVal').textContent = state.score.toLocaleString('vi-VN');\n  document.getElementById('stepVal').textContent = state.step + '/50';\n  document.getElementById('stepNowBadge').textContent = 'Ô ' + state.step;\n  if (state.mode === 'vs') updateVSHUD();\n}");
// goNext guard
once('function goNext() {\n  if (!state.answered || state.resolvingTurn || state.finished) return;', 'function goNext() {\n  if (state.mode === \'vs\') return;\n  if (!state.answered || state.resolvingTurn || state.finished) return;');
fs.writeFileSync(p,t,'utf8'); console.log('VS mode added; backup '+b);
