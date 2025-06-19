const mongoose = require('mongoose');

const RewardSchema = new mongoose.Schema({
  user: String,
  total: Number,
  breakdown: [{
    validator: String,
    amount: Number,
    timestamp: Date
  }]
});

module.exports = mongoose.model('Reward', RewardSchema);
