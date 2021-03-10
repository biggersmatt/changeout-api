const { json } = require('body-parser');
const db = require('../models');

const index = (req, res) => {
  db.Flank.find({}, (err, allFlanks) => {
    if(err) return console.log(err);
    res.json({allFlanks});
  })
}

const show = (req, res) => {
  db.Flank.findById(req.params.id, (err, foundFlank) => {
    if(err) console.log(err);
    res.json({foundFlank});
  })
}

const create = (req, res) => {
  db.Flank.create(req.body, (err, newFlank) => {
    if(newFlank.side === 'A') {
      if(err) console.log(err);
      res.json({newFlank});
      db.Endcap.findByIdAndUpdate(
        req.body.selectedEndcap,
        {$push: {flankA: newFlank}},
        {new: true},
        (err, updatedEndcap) => {
          if(err) console.log(err);
        }
      )
    } else if(newFlank.side === 'B') {
      if(err) console.log(err);
      res.json({newFlank});
      db.Endcap.findByIdAndUpdate(
        req.body.selectedEndcap,
        {$push: {flankB: newFlank}},
        {new: true},
        (err, updatedEndcap) => {
          if(err) console.log(err);
        }
      )
    }
  })
}

const update = (req, res) => {
  db.Flank.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedFlank) => {
      if(err) console.log(err);
      res.json(updatedFlank);
    }
  )
}

const destroy = (req, res) => {
  db.Flank.findByIdAndDelete(req.params.id, (err, deletedFlank) => {
    if(err) console.log(err);
    res.json(deletedFlank);
    
  })
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
}