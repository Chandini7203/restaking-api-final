const mongoose = require('mongoose');

const ValidatorSchema = new mongoose.Schema({
  operator: String,
  totalDelegated: Number,
  slashHistory: [Object],
  status: String
});

module.exports = mongoose.model('Validator', ValidatorSchema);
