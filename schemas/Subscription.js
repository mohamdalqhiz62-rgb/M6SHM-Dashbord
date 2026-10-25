const mongoose = require('mongoose');
const SubscriptionSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  guildId: { type: String, default: '' },
  status: { type: String, enum: ['pending', 'active', 'rejected', 'expired'], default: 'pending', index: true },
  startedAt: { type: Date },
  expiresAt: { type: Date, index: true },
  amountSAR: { type: Number, default: 17.5 },
  receiptPath: { type: String },
  reviewedBy: { type: String },
  reviewedAt: { type: Date },
  reviewNote: { type: String }
}, { timestamps: true });
SubscriptionSchema.index({ userId: 1, status: 1, expiresAt: 1 });
module.exports = mongoose.models.Subscription || mongoose.model('Subscription', SubscriptionSchema);
