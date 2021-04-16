const db = require('../models');

const index = (req, res) => {
  // if (!req.session.currentUser){
  //   res.status(400);
  //   res.send('Not logged In')
  //   return;
  // }
  db.Endcap.find({})
    .populate('flankA flankB').exec((err, allEndcaps) => {
    if(err) return console.log(err);
    res.json({allEndcaps});
  })
}

const show = (req, res) => {
  // if (!req.session.currentUser){
  //   res.status(400);
  //   res.send('Not logged In')
  //   return;
  // }
  db.Endcap.findById(req.params.id, (err, foundEndcap) => {
    if(err) console.log(err);
    res.json({foundEndcap});
  })
}

const create = (req, res) => {
  // if (!req.session.currentUser){
  //   res.status(400);
  //   res.send('Not logged In')
  //   return;
  // }
  const endcapObj = req.body;
  // endcapObj.user = req.session.currentUser._id
  db.Endcap.create(endcapObj, (err, newEndcap) => {
    if(err) console.log(err);
    res.json({newEndcap});
    db.User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new: true},
      (err, columnOrder) => {
        if(err) console.log(err);
        // No res.json
      }
    )
  })
}

const update = (req, res) => {
  // if (!req.session.currentUser){
  //   res.status(400);
  //   res.send('Not logged In')
  //   return;
  // }
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
  // if (!req.session.currentUser){
  //   res.status(400);
  //   res.send('Not logged In')
  //   return;
  // }
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