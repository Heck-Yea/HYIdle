import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  stats: {
    xp: { type: Number, default: 0 },
    level: { type: Number, default: 1 },
    gold: { type: Number, default: 0 },
  },
  inventory: [{ itemId: String, qty: Number }],
  lastPassiveUpdate: { type: Date, default: Date.now },
  activeAction: {
    type: {
      type: String,
      enum: ['combat', 'crafting', null],
      default: null,
    },
    startedAt: Date,
    expiresAt: Date,
    targetId: String,
    groupId: String,
  },
  friends: [String],
  groupId: { type: String, default: null },
});

const User = mongoose.model('User', UserSchema);

export default User;
