const db = require('../models');

const index = (req, res) => {
  db.Endcap.find({}, (err, allEndcaps) => {
    if(err) return console.log(err);
    res.json({allEndcaps});
  })
}

const show = (req, res) => {
  db.Endcap.findById(req.params.id, (err, foundEndcap) => {
    if(err) console.log(err);
    res.json({foundEndcap});
  })
}

const create = (req, res) => {
  db.Endcap.create(req.body, (err, newEndcap) => {
    if(err) console.log(err);
    res.json({newEndcap});
  })
}

const update = (req, res) => {
  db.Endcap.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedEndcap) => {
      if(err) console.log(err);
      res.json(updatedEndcap);
    }
  )
}

const destroy = (req, res) => {
  res.send('<h1>Endcaps destroy</h1>');
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}