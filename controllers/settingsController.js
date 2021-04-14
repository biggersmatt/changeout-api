const db = require('../models');

const index = (req, res) => {
  db.Settings.find({},(err, settings) => {
    if(err) return console.log(err);
    res.json({settings});
  })
}

const create = (req, res) => {
  // console.log('setting controller page:::::::::', req.session.currentUser)
  // //Establishes settings  user on default creation.
  // const settingsObj = req.body
  // settingsObj.user = req.session.currentUser._id
  // db.Settings.create(settingsObj, (err, newSettings) => {
  //   if(err) console.log(err);
  //   res.json({newSettings});
  // })
}

const update = (req, res) => {
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