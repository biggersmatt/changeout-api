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
  flanks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Flank',
      limit: 2,
    }
  ],
})

const Endcap = mongoose.model('Endcap', endcapSchema);

module.exports = Endcap;