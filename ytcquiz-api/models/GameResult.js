const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
  recordId: { type: String, required: true, unique: true, index: true },
  playerId: { type: String, required: true, trim: true, index: true, maxlength: 40 },
  playerName: { type: String, required: true, trim: true, maxlength: 60 },
  score: { type: Number, required: true, min: 0 },
  step: { type: Number, required: true, min: 0, max: 50 },
  correct: { type: Number, required: true, min: 0 },
  total: { type: Number, required: true, min: 0 },
  mode: { type: String, enum: ['classic', 'vs'], required: true },
  reachedFinish: { type: Boolean, default: false },
  playedAt: { type: Date, default: Date.now, index: true },
  botScore: Number,
  botCorrect: Number,
  stealCorrect: Number,
  stealOpportunities: Number,
  botStealCorrect: Number,
  botStealOpportunities: Number,
  companions: { type: [String], default: [] },
  botCompanion: String,
  botCompanions: { type: [String], default: [] }
}, { timestamps: true, versionKey: false });

gameResultSchema.index({ score: -1, playedAt: -1 });
gameResultSchema.index({ playerId: 1, playedAt: -1 });

module.exports = mongoose.model('GameResult', gameResultSchema);
