const mongoose = require('mongoose');

const playerProgressSchema = new mongoose.Schema({
  playerId: { type: String, required: true, unique: true, index: true, trim: true, maxlength: 40 },
  playerName: { type: String, required: true, trim: true, maxlength: 60 },
  exp: { type: Number, required: true, min: 0, default: 0 },
  totalExp: { type: Number, required: true, min: 0, default: 0 },
  stats: { type: mongoose.Schema.Types.Mixed, default: {} },
  achievements: { type: mongoose.Schema.Types.Mixed, default: {} },
  hiddenAchievements: { type: [mongoose.Schema.Types.Mixed], default: [] },
  daily: { type: mongoose.Schema.Types.Mixed, default: {} },
  updatedAt: { type: Date, default: Date.now, index: true }
}, { versionKey: false });

playerProgressSchema.index({ exp: -1, playerName: 1 });
module.exports = mongoose.model('PlayerProgress', playerProgressSchema);
