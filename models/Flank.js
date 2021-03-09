const mongoose = require('mongoose');

const flankSchema = new mongoose.Schema({
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
  side: String,
  endcap: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Endcap',
    },
})

const Flank = mongoose.model('Flank', flankSchema);

module.exports = Flank;