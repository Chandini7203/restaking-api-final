const mongoose = require('mongoose');

const RestakerSchema = new mongoose.Schema({
  address: String,
  amount: Number,
  validator: String
});

module.exports = mongoose.model('Restaker', RestakerSchema);
