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
  promoMonth: {
    type: String,
    default: 'January',
  },
  promoPeriod: {
    type: String,
    default: 'A',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;