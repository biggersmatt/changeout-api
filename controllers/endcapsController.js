const db = require('../models');

const index = (req, res) => {
  db.Endcap.find({}, (err, allEndcaps) => {
    if(err) return console.log(err);
    res.json({allEndcaps})
  })
}

const show = (req, res) => {
  res.send('<h1>Endcaps Show</h1>');
}

const create = (req, res) => {
  res.send('<h1>Endcaps create</h1>');
}

const update = (req, res) => {
  res.send('<h1>Endcaps update</h1>');
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