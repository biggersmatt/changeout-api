const db = require('../models');

const index = (req, res) => {
  console.log('Settings Index');
}

const create = (req, res) => {
  console.log('Settings Create')
}

const update = (req, res) => {
  console.log('Settings Update');
}

module.exports = {
  index,
  create,
  update,
}