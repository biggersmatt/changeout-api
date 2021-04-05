const mongoose = require('mongoose');

const endcapSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
  },
  itemOne: String,
  itemTwo: String,
  itemThree: String,
  itemFour: String,
  itemFive: String,
  change: Boolean,
  flankA: {
    type: mongoose.Schema.Types.ObjectId,
    ref:'Flank',
  },
  flankB: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Flank',
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Endcap = mongoose.model('Endcap', endcapSchema);

module.exports = Endcap;