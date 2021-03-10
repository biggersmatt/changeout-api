const db = require('../models');

const index = (req, res) => {
  console.log('Settings Index');
}

const create = (req, res) => {
  db.Settings.create(req.body, (err, newSettings) => {
    if(err) console.log(err);
    console.log(newSettings)
    res.json({newSettings});
  })
}

const update = (req, res) => {
  console.log('Settings Update');
}

module.exports = {
  index,
  create,
  update,
}