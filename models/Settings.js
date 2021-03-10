const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  columnOrder: [],
  promoMonth: String,
  promoPeriod: String,
})

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;