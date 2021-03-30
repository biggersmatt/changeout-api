const db = require('../models');

const index = (req, res) => {
  console.log(req.session.currentUser)
  if (!req.session.currentUser){
    res.status(400);
    console.log('endcap index not logged in hit')
    res.send('Not logged In')
    return;
  }
  console.log('endcap index hit')
  db.Endcap.find({user: req.session.currentUser._id})
    .populate('flankA flankB').exec((err, allEndcaps) => {
    if(err) return console.log(err);
    res.json({allEndcaps});
  })
}

const show = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
  db.Endcap.findById(req.params.id, (err, foundEndcap) => {
    if(err) console.log(err);
    res.json({foundEndcap});
  })
}

const create = (req, res) => {
  console.log('hitting create route')
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    console.log('Not logged In')
    return;
  }
  console.log(req.body)
  const endcapObj = req.body;
  endcapObj.user = req.session.currentUser._id
  db.Endcap.create(endcapObj, (err, newEndcap) => {
    if(err) console.log(err);
    res.json({newEndcap});
  })
}

const update = (req, res) => {
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
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
  if (!req.session.currentUser){
    res.status(400);
    res.send('Not logged In')
    return;
  }
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