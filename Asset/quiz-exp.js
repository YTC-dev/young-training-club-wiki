/* YTC Quiz Race — EXP, daily missions, achievements and EXP leaderboard.
 * Local-first: the browser keeps progress and periodically mirrors a snapshot to the API.
 * Existing game results are never backfilled into EXP; a profile starts EXP on first use after this feature is released.
 */
(function () {
  'use strict';

  const EXP_VERSION = 1;
  const ACHIEVEMENTS = [
    { id: 'correct200', label: 'Trả lời đúng 200 câu hỏi', stat: 'correctAnswers', target: 200 },
    { id: 'classic25', label: 'Về đích 25 lần trong Classic Mode', stat: 'classicFinishes', target: 25 },
    { id: 'vs15', label: 'Về đích 15 lần trong VS Mode', stat: 'vsFinishes', target: 15 },
    { id: 'expert10', label: 'Về đích 10 lần trong Expert Mode', stat: 'expertFinishes', target: 10 },
    { id: 'steal20', label: 'Trả lời đúng 20 câu hỏi cướp được', stat: 'stealCorrect', target: 20 },
    { id: 'bot10', label: 'Tổng 10 lần thắng bot', stat: 'botWins', target: 10 },
    { id: 'companion50', label: 'Chọn người đồng hành in-game 50 lần', stat: 'companionsSelected', target: 50 },
    { id: 'score200k', label: 'Số điểm tích luỹ 200.000', stat: 'totalScore', target: 200000 },
    { id: 'legendary10', label: 'Đạt Huyền Thoại YTC tích luỹ 10 lần', stat: 'ytcLegendary', target: 10 },
    { id: 'expertLegendary8', label: 'Đạt Huyền Thoại Expert tích luỹ 8 lần', stat: 'expertLegendary', target: 8 },
    { id: 'dice100', label: 'Tổng 100 lần tung xúc xắc ra 4', stat: 'diceFour', target: 100 },
    { id: 'steps400', label: 'Số bước đi tích luỹ 400', stat: 'totalSteps', target: 400 }
  ];
  const DAILY = [
    { id: 'login', label: 'Đăng nhập', target: 1, reward: 5 },
    { id: 'mode', label: 'Vào VS Mode hoặc Expert Mode', target: 1, reward: 5 },
    { id: 'correct15', label: 'Trả lời đúng 15 câu hỏi', target: 15, reward: 10 },
    { id: 'companions3', label: 'Chọn 3 người đồng hành in-game', target: 3, reward: 10 },
    { id: 'steal2', label: 'Trả lời đúng 2 câu hỏi cướp được', target: 2, reward: 10 },
    { id: 'steps40', label: 'Tổng 40 bước tích luỹ', target: 40, reward: 10 },
    { id: 'dice4x5', label: 'Tung xúc xắc ra 4 tổng cộng 5 lần', target: 5, reward: 10 },
    { id: 'expert51', label: 'Đi qua bước 51 trong Expert Mode', target: 1, reward: 10 },
    { id: 'score10k', label: 'Tổng 10.000 điểm tích luỹ', target: 10000, reward: 10 }
  ];
  const STAT_DEFAULTS = {
    correctAnswers: 0, classicFinishes: 0, vsFinishes: 0, expertFinishes: 0,
    stealCorrect: 0, botWins: 0, companionsSelected: 0, totalScore: 0,
    ytcLegendary: 0, expertLegendary: 0, diceFour: 0, totalSteps: 0
  };

  function isoNow() { return new Date().toISOString(); }
  function dayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }
  function freshExp() {
    return {
      version: EXP_VERSION, exp: 0, totalExp: 0, createdAt: isoNow(),
      stats: { ...STAT_DEFAULTS }, achievements: {}, hiddenAchievements: [],
      daily: { date: dayKey(), counters: {}, claimed: {} },
      rewardBundleGranted: false, history: []
    };
  }
  function ensureExp(p) {
    if (!p) return null;
    if (!p.expData || typeof p.expData !== 'object') p.expData = freshExp();
    const e = p.expData;
    e.version = EXP_VERSION;
    e.exp = Math.max(0, Number(e.exp) || 0);
    e.totalExp = Math.max(e.exp, Number(e.totalExp) || 0);
    e.stats = { ...STAT_DEFAULTS, ...(e.stats || {}) };
    e.achievements = e.achievements && typeof e.achievements === 'object' ? e.achievements : {};
    e.hiddenAchievements = Array.isArray(e.hiddenAchievements) ? e.hiddenAchievements : [];
    e.daily = e.daily && typeof e.daily === 'object' ? e.daily : { date: dayKey(), counters: {}, claimed: {} };
    if (e.daily.date !== dayKey()) e.daily = { date: dayKey(), counters: {}, claimed: {} };
    if (!e.daily.counters || typeof e.daily.counters !== 'object') e.daily.counters = {};
    if (!e.daily.claimed || typeof e.daily.claimed !== 'object') e.daily.claimed = {};
    return e;
  }
  function current() {
    return typeof window.currentPlayer === 'function' ? window.currentPlayer() : null;
  }
  function levelFor(exp) {
    let level = 0, threshold = 0;
    while (exp >= threshold + 100 + level * 50) { threshold += 100 + level * 50; level++; }
    return { level, current: threshold, next: threshold + 100 + level * 50 };
  }
  function save(p) {
    if (typeof window.savePlayerDb === 'function') window.savePlayerDb();
    render();
    sync(p);
  }
  function addExp(amount, reason, p) {
    const e = ensureExp(p || current());
    amount = Math.max(0, Math.floor(Number(amount) || 0));
    if (!e || !amount) return;
    e.exp += amount; e.totalExp += amount;
    e.history = [...(e.history || []), { amount, reason: String(reason || 'EXP'), at: isoNow() }].slice(-50);
    save(p || current());
  }
  function claimDaily(id) {
    const p = current(), e = ensureExp(p); if (!e || e.daily.claimed[id]) return;
    const item = DAILY.find(x => x.id === id); if (!item) return;
    e.daily.claimed[id] = isoNow();
    addExp(item.reward, `Nhiệm vụ ngày: ${item.label}`, p);
  }
  function dailyEvent(id, value) {
    const p = current(), e = ensureExp(p); if (!e) return;
    const item = DAILY.find(x => x.id === id); if (!item) return;
    e.daily.counters[id] = (Number(e.daily.counters[id]) || 0) + (Number(value) || 1);
    if ((Number(e.daily.counters[id]) || 0) >= item.target) claimDaily(id);
    else save(p);
  }
  function checkAchievements(p) {
    const e = ensureExp(p), done = [];
    ACHIEVEMENTS.forEach(item => {
      if (!e.achievements[item.id] && Number(e.stats[item.stat] || 0) >= item.target) {
        e.achievements[item.id] = { completedAt: isoNow() }; done.push(item);
      }
    });
    if (Object.keys(e.achievements).length >= ACHIEVEMENTS.length && !e.rewardBundleGranted) {
      e.rewardBundleGranted = true;
      e.hiddenAchievements.push({ id: 'ytcMysteryAthlete', label: 'Tuyển thủ YTC huyền bí', status: 'admin-verification-required', createdAt: isoNow() });
      addExp(5000, 'Hoàn thành toàn bộ nhiệm vụ thành tựu', p);
    }
    return done;
  }
  function event(name, amount) {
    const p = current(), e = ensureExp(p); if (!e) return;
    if (name === 'login') { dailyEvent('login'); return; }
    if (name === 'mode') { dailyEvent('mode'); return; }
    if (name === 'correct') { e.stats.correctAnswers += amount || 1; dailyEvent('correct15', amount || 1); }
    if (name === 'stealCorrect') { e.stats.stealCorrect += amount || 1; dailyEvent('steal2', amount || 1); }
    if (name === 'companion') { e.stats.companionsSelected += amount || 1; dailyEvent('companions3', amount || 1); }
    if (name === 'steps') { e.stats.totalSteps += amount || 0; dailyEvent('steps40', amount || 0); }
    if (name === 'dice4') { e.stats.diceFour += amount || 1; dailyEvent('dice4x5', amount || 1); }
    if (name === 'expert51') dailyEvent('expert51');
    checkAchievements(p); save(p);
  }
  function finishRun(run) {
    const p = current(), e = ensureExp(p); if (!e || !run || e._lastRecordId === run.recordId) return;
    e._lastRecordId = run.recordId;
    const score = Math.max(0, Number(run.score) || 0), expert = run.mode === 'expert';
    let completion = expert ? 15 : 10;
    if (expert) { if (score > 15000) completion = 30; else if (score > 8000) completion = 25; else if (score > 3500) completion = 20; }
    else { if (score > 10000) completion = 25; else if (score > 5000) completion = 20; else if (score > 2000) completion = 15; }
    addExp(completion, expert ? 'Hoàn thành lượt Expert' : 'Hoàn thành lượt chơi', p);
    if (run.reachedFinish) addExp(expert || run.mode === 'vs' ? 15 : 10, 'Về đích', p);
    if (run.mode === 'vs' && run.playerWon) addExp(10, 'Thắng VS Mode', p);
    if (run.reachedFinish) e.stats[expert ? 'expertFinishes' : run.mode === 'vs' ? 'vsFinishes' : 'classicFinishes']++;
    if (run.mode === 'vs' && run.playerWon) e.stats.botWins++;
    e.stats.totalScore += score;
    if (!expert && score >= 10000) e.stats.ytcLegendary++;
    if (expert && score >= 15000) e.stats.expertLegendary++;
    dailyEvent('score10k', score);
    checkAchievements(p); save(p);
  }
  function sync(p) {
    if (!p || !p.id || !window.QUIZ_API_BASE_URL || !p.expData) return;
    const e = p.expData;
    const payload = { playerId: p.id, playerName: p.name || 'Người chơi', exp: e.exp, totalExp: e.totalExp, stats: e.stats, achievements: e.achievements, hiddenAchievements: e.hiddenAchievements, daily: e.daily, updatedAt: isoNow() };
    fetch(`${window.QUIZ_API_BASE_URL}/api/exp/progress`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload), keepalive: true }).catch(() => {});
  }
  async function syncFromCloud(p) {
    if (!p || !window.QUIZ_API_BASE_URL) return;
    try { const r = await fetch(`${window.QUIZ_API_BASE_URL}/api/exp/progress/${encodeURIComponent(p.id)}`, { cache: 'no-store' }); if (!r.ok) return; const data = await r.json(); if (!data.progress) return; const remote = data.progress; const local = ensureExp(p); if ((Number(remote.totalExp) || 0) > (Number(local.totalExp) || 0)) p.expData = { ...local, ...remote, stats: { ...STAT_DEFAULTS, ...(remote.stats || {}) } }; savePlayerDb(); render(); } catch (_) {}
  }
  function render() {
    const p = current(), e = ensureExp(p); if (!e) return;
    const l = levelFor(e.exp);
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set('profileExp', `${e.exp.toLocaleString('vi-VN')} EXP`);
    set('profileLevel', `Level ${l.level}`);
    set('profileExpNext', `${Math.max(0, l.next - e.exp).toLocaleString('vi-VN')} EXP đến Level ${l.level + 1}`);
    const levelSpan = Math.max(1, l.next - l.current);
    const progress = Math.min(100, Math.max(0, ((e.exp - l.current) / levelSpan) * 100));
    const progressBar = document.getElementById('profileExpProgress');
    const progressTrack = progressBar?.parentElement;
    if (progressBar) progressBar.style.width = `${progress.toFixed(2)}%`;
    if (progressTrack) progressTrack.setAttribute('aria-valuenow', String(Math.round(progress)));
    set('profileExpProgressLabel', `${Math.round(progress)}% · ${Math.max(0, e.exp - l.current).toLocaleString('vi-VN')}/${levelSpan.toLocaleString('vi-VN')} EXP trong level`);
    const completed = Object.keys(e.achievements).length;
    set('profileAchievementSummary', `${completed}/${ACHIEVEMENTS.length} nhiệm vụ · ${e.hiddenAchievements.length ? 'Chờ admin xác minh thành tựu ẩn' : 'Chưa có thành tựu ẩn'}`);
    const list = document.getElementById('expAchievementList');
    if (list) list.innerHTML = ACHIEVEMENTS.map(a => `<li class="exp-achievement ${e.achievements[a.id] ? 'done' : ''}"><span>${e.achievements[a.id] ? '✓' : '○'} ${a.label}</span><b>${Math.min(Number(e.stats[a.stat] || 0), a.target).toLocaleString('vi-VN')}/${a.target.toLocaleString('vi-VN')}</b></li>`).join('');
  }
  async function loadLeaderboard() {
    const list = document.getElementById('expLeaderboardList'), status = document.getElementById('expLeaderboardStatus'); if (!list || !window.QUIZ_API_BASE_URL) return;
    list.innerHTML = '<li class="record-empty">Đang tải leaderboard EXP…</li>';
    try { const r = await fetch(`${window.QUIZ_API_BASE_URL}/api/exp?view=leaderboard&limit=20`, { cache: 'no-store' }); if (!r.ok) throw new Error(); const data = await r.json(); const rows = Array.isArray(data.leaderboard) ? data.leaderboard : []; list.innerHTML = rows.length ? rows.map(x => `<li><span>${window.escapeHtml ? window.escapeHtml(x.playerName || 'Người chơi') : String(x.playerName || 'Người chơi')}</span><span class="record-score">${Number(x.exp || 0).toLocaleString('vi-VN')} EXP · Lv.${Number(x.level || 0)}</span></li>`).join('') : '<li class="record-empty">Chưa có dữ liệu EXP online</li>'; if (status) status.textContent = rows.length ? `Top ${rows.length} người chơi theo EXP` : ''; } catch (_) { list.innerHTML = '<li class="record-empty">Chưa tải được leaderboard EXP.</li>'; if (status) status.textContent = 'Kiểm tra kết nối máy chủ rồi bấm Làm mới.'; }
  }
  window.YTC_EXP = { event, finishRun, ensureExp, render, sync, syncFromCloud, loadLeaderboard, levelFor, daily: DAILY, achievements: ACHIEVEMENTS };
  window.addEventListener('DOMContentLoaded', () => { const p = current(); if (p) { ensureExp(p); event('login'); syncFromCloud(p); render(); } loadLeaderboard(); });
})();
