const db = require('../models');

const index = (req, res) => {
  db.Endcap.find({})
    .populate('flankA flankB').exec((err, allEndcaps) => {
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
  const endcapObj = req.body;
  db.Endcap.create(endcapObj, (err, newEndcap) => {
    if(err) console.log(err);
    res.json({newEndcap});
    db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (err, columnOrder) => {
        if(err) console.log(err);
      }
    )
  })
}

const update = (req, res) => {
  db.Endcap.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedEndcap) => {
      if(err) console.log(err);
      res.json(req.body);
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