const db = require('../models');

const index = (req, res) => {
  db.Endcap.find({}).populate('flanks').exec((err, allEndcaps) => {
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
  db.Endcap.findByIdAndDelete(req.params.id, (err, deletedEndcap) => {
    if(err) console.log(err);
    res.json(deletedEndcap);
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}