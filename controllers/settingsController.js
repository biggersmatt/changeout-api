const db = require('../models');

const index = (req, res) => {
  console.log('Settings Index');
  db.Settings.find({},(err, settings) => {
    if(err) return console.log(err);
    res.json({settings});
  })
}

const create = (req, res) => {
  console.log('Settings Create');
  db.Settings.create(req.body, (err, newSettings) => {
    if(err) console.log(err);
    res.json({newSettings});
  })
}

const update = (req, res) => {
  console.log('Settings Update');
  db.Settings.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedSetting) => {
      if(err) console.log(err);
      res.json(updatedSetting);
    }
  )
}

module.exports = {
  index,
  create,
  update,
}