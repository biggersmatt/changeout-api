const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  storeNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Settings'
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User;