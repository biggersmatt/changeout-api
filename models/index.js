const { Mongoose } = require("mongoose");

const mongoose = require('mongoose');

// const connectionString = process.env.MONGODB_URI;
const connectionString = "mongodb://localhost:27017/changout"
const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
}

mongoose.connect(connectionString, options)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log(err));

module.exports = {
  Endcap: require('./Endcap'),
  Flank: require('./Flank'),
  Settings: require('./Settings'),
  User: require('./User')
}