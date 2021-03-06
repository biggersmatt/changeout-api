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
})

const Endcap = mongoose.model('Endcap', endcapSchema);

module.exports = Endcap;