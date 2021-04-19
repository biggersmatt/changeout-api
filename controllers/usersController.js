const db = require('../models')

const index = (req, res) => {
  db.User.find({}, (err, allUsers) => {
    if(err) return console.log(err);
    res.json({allUsers});
  })
}

const create = (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if(err) console.log(err);
    res.json({newUser});
  })
}

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, columnOrder) => {
      if(err) console.log(err);
      res.json(columnOrder);
    }
  )
}

module.exports = {
  index,
  create,
  update,
}