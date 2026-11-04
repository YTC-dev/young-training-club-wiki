require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const { rateLimit } = require('express-rate-limit');
const GameResult = require('./models/GameResult');
const PlayerProgress = require('./models/PlayerProgress');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const allowedOrigins = (process.env.CORS_ORIGINS || '').split(',').map(s => s.trim()).filter(Boolean);

app.disable('x-powered-by');
app.use(helmet());
app.use(cors({ origin(origin, callback) {
  // Allow command-line tools and local file previews without an Origin header.
  if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) return callback(null, true);
  return callback(new Error('Origin is not allowed by CORS'));
} }));
app.use(express.json({ limit: '16kb' }));
app.use('/api/', rateLimit({ windowMs: 60 * 1000, limit: 120, standardHeaders: 'draft-7', legacyHeaders: false }));

app.get('/health', (_req, res) => res.json({ ok: true, database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' }));

// Store only explicitly allowed fields; never accept MongoDB operators or arbitrary documents.
app.post('/api/results', async (req, res, next) => {
  try {
    const b = req.body || {};
    const recordId = typeof b.recordId === 'string' ? b.recordId.trim().slice(0, 120) : '';
    if (recordId.length < 8) return res.status(400).json({ error: 'recordId không hợp lệ.' });
    const playerId = typeof b.playerId === 'string' ? b.playerId.trim().slice(0, 40) : '';
    const playerName = typeof b.playerName === 'string' ? b.playerName.trim().replace(/\s+/g, ' ').slice(0, 60) : '';
    if (!/^[A-Za-z0-9_-]{3,40}$/.test(playerId)) return res.status(400).json({ error: 'playerId không hợp lệ.' });
    if (playerName.length < 2) return res.status(400).json({ error: 'playerName cần ít nhất 2 ký tự.' });
    for (const key of ['score', 'step', 'correct', 'total']) {
      if (!Number.isInteger(b[key]) || b[key] < 0 || b[key] > 1000000) return res.status(400).json({ error: `${key} không hợp lệ.` });
    }
    if (!['classic', 'expert', 'vs'].includes(b.mode)) return res.status(400).json({ error: 'mode phải là classic, expert hoặc vs.' });
    const maxStep = b.mode === 'expert' ? 70 : 50;
    if (b.step > maxStep || b.correct > b.total || b.total > 500) return res.status(400).json({ error: 'Số liệu kết quả không hợp lệ.' });

    const record = {
      recordId,
      playerId, playerName, score: b.score, step: b.step, correct: b.correct, total: b.total,
      mode: b.mode, reachedFinish: Boolean(b.reachedFinish),
      playedAt: b.playedAt && !Number.isNaN(Date.parse(b.playedAt)) ? new Date(b.playedAt) : new Date(),
      botScore: Number.isInteger(b.botScore) ? b.botScore : undefined,
      botCorrect: Number.isInteger(b.botCorrect) ? b.botCorrect : undefined,
      stealCorrect: Number.isInteger(b.stealCorrect) ? b.stealCorrect : undefined,
      stealOpportunities: Number.isInteger(b.stealOpportunities) ? b.stealOpportunities : undefined,
      botStealCorrect: Number.isInteger(b.botStealCorrect) ? b.botStealCorrect : undefined,
      botStealOpportunities: Number.isInteger(b.botStealOpportunities) ? b.botStealOpportunities : undefined,
      companions: Array.isArray(b.companions) ? b.companions.filter(x => typeof x === 'string').slice(0, 10).map(x => x.slice(0, 40)) : [],
      botCompanion: typeof b.botCompanion === 'string' ? b.botCompanion.slice(0, 40) : undefined,
      botCompanions: Array.isArray(b.botCompanions) ? b.botCompanions.filter(x => typeof x === 'string').slice(0, 10).map(x => x.slice(0, 40)) : []
    };
    const saved = await GameResult.findOneAndUpdate(
      { recordId: record.recordId },
      { $setOnInsert: record },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );
    return res.status(201).json({ ok: true, result: saved });
  } catch (error) { return next(error); }
});

app.get('/api/results', async (req, res, next) => {
  try {
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 50, 1), 100);
    const view = String(req.query.view || '').trim();
    if (['leaderboard', 'regular-leaderboard', 'expert-leaderboard', 'all-leaderboard'].includes(view)) {
      let match = {};
      if (view === 'expert-leaderboard' || req.query.mode === 'expert') {
        match = { mode: 'expert' };
      } else if (view === 'all-leaderboard' || req.query.mode === 'all') {
        match = {};
      } else {
        // 'regular-leaderboard' hoặc 'leaderboard' mặc định chỉ gồm chế độ classic và vs
        match = { mode: { $in: ['classic', 'vs'] } };
      }
      const leaderboard = await GameResult.aggregate([
        { $match: match },
        { $sort: { playedAt: -1, _id: 1 } },
        { $group: {
          _id: '$playerId',
          playerName: { $first: '$playerName' },
          maxScore: { $max: '$score' },
          totalGamesPlayed: { $sum: 1 }
        } },
        { $sort: { maxScore: -1, playerName: 1, _id: 1 } },
        { $limit: limit },
        { $project: { _id: 0, playerId: '$_id', playerName: 1, maxScore: 1, totalGamesPlayed: 1 } }
      ]);
      return res.json({ leaderboard });
    }
    const results = await GameResult.find().sort({ score: -1, playedAt: -1 }).limit(limit).lean();
    return res.json({ results });
  } catch (error) { return next(error); }
});

app.get('/api/results/player/:playerId', async (req, res, next) => {
  try {
    const playerId = String(req.params.playerId || '').trim();
    if (!/^[A-Za-z0-9_-]{3,40}$/.test(playerId)) return res.status(400).json({ error: 'playerId không hợp lệ.' });
    const results = await GameResult.find({ playerId }).sort({ playedAt: -1 }).limit(100).lean();
    return res.json({ results });
  } catch (error) { return next(error); }
});

function validPlayerId(value) { return /^[A-Za-z0-9_-]{3,40}$/.test(String(value || '').trim()); }

// EXP progress is stored as a replaceable snapshot. The browser remains local-first;
// this endpoint makes the same progress available across devices and for the leaderboard.
app.post('/api/exp/progress', async (req, res, next) => {
  try {
    const b = req.body || {};
    const playerId = typeof b.playerId === 'string' ? b.playerId.trim().slice(0, 40) : '';
    const playerName = typeof b.playerName === 'string' ? b.playerName.trim().replace(/\s+/g, ' ').slice(0, 60) : '';
    if (!validPlayerId(playerId) || playerName.length < 2) return res.status(400).json({ error: 'Thông tin tài khoản không hợp lệ.' });
    const exp = Number.isInteger(b.exp) && b.exp >= 0 ? b.exp : 0;
    const totalExp = Number.isInteger(b.totalExp) && b.totalExp >= exp ? b.totalExp : exp;

    const existing = await PlayerProgress.findOne({ playerId }).lean();
    if (existing && Number(existing.totalExp || 0) > totalExp) {
      return res.status(200).json({ ok: true, progress: existing });
    }

    const progress = { playerId, playerName, exp, totalExp, stats: b.stats && typeof b.stats === 'object' ? b.stats : {}, achievements: b.achievements && typeof b.achievements === 'object' ? b.achievements : {}, hiddenAchievements: Array.isArray(b.hiddenAchievements) ? b.hiddenAchievements.slice(0, 20) : [], daily: b.daily && typeof b.daily === 'object' ? b.daily : {}, updatedAt: new Date() };
    const saved = await PlayerProgress.findOneAndUpdate({ playerId }, { $set: progress }, { upsert: true, new: true, setDefaultsOnInsert: true }).lean();
    return res.status(201).json({ ok: true, progress: saved });
  } catch (error) { return next(error); }
});

app.get('/api/exp/progress/:playerId', async (req, res, next) => {
  try {
    const playerId = String(req.params.playerId || '').trim();
    if (!validPlayerId(playerId)) return res.status(400).json({ error: 'playerId không hợp lệ.' });
    const progress = await PlayerProgress.findOne({ playerId }).lean();
    return res.json({ progress: progress || null });
  } catch (error) { return next(error); }
});

app.get('/api/exp', async (req, res, next) => {
  try {
    const limit = Math.min(Math.max(parseInt(req.query.limit, 10) || 20, 1), 100);
    if (req.query.view !== 'leaderboard') return res.json({ progress: await PlayerProgress.find().sort({ exp: -1 }).limit(limit).lean() });
    const leaderboard = await PlayerProgress.find({}, { _id: 0, playerId: 1, playerName: 1, exp: 1, totalExp: 1 }).sort({ exp: -1, playerName: 1 }).limit(limit).lean();
    return res.json({ leaderboard: leaderboard.map(x => ({ ...x, level: levelForExp(x.exp) })) });
  } catch (error) { return next(error); }
});

function levelForExp(exp) {
  let level = 0, threshold = 0;
  while (Number(exp) >= threshold + 100 + level * 50) { threshold += 100 + level * 50; level++; }
  return level;
}

app.use((err, _req, res, _next) => {
  console.error(err.message);
  if (err.message === 'Origin is not allowed by CORS') return res.status(403).json({ error: 'Origin không được phép.' });
  return res.status(500).json({ error: 'Lỗi máy chủ.' });
});

async function start() {
  if (!process.env.MONGO_URI) throw new Error('Thiếu MONGO_URI trong file .env');
  try {
    await mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 10000 });
    console.log('Đã kết nối MongoDB Atlas');
    app.listen(PORT, () => console.log(`YTC Quiz API chạy tại http://localhost:${PORT}`));
  } catch (error) {
    if (error.message && error.message.toLowerCase().includes('bad auth')) {
      console.error('\n❌ Lỗi xác thực MongoDB Atlas (bad auth: authentication failed)');
      console.error('👉 Nguyên nhân: Username hoặc Password trong MONGO_URI (.env) không trùng khớp với Database User trên Atlas.');
      console.error('👉 Cách khắc phục: Vào Atlas -> Database Access -> Chọn user (hoặc Add User mới) -> Đặt lại Password -> Cập nhật URI vào .env.\n');
    }
    throw error;
  }
}
start().catch(error => { console.error('Không khởi động được API:', error.message); process.exit(1); });
