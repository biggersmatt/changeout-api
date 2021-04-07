const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  columnOrder: {
    id: {
      type: String,
      default: 'column-1',
    },
    title: {
      type: String,
      default: 'To do',
    },
    endcapIds: [],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;