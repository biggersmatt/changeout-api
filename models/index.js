const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/changeout';


mongoose.connect(connectionString)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));