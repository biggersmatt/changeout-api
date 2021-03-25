const db = require('../models')

const create = (req, res) => {
  console.log(req.body)
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    req.session.currentUser = newUser
    console.log(newUser),
    res.json(newUser)
    return console.log('account created')
  })
}

const login = (req, res) => {
  console.log(req.body)
  db.User.findOne({company: req.body.company}, (err, foundUser) => {
    if (!foundUser) return console.log('no user found')
    if (req.body.password !== foundUser.password) return console.log('incorrect password')
    if (req.body.password === foundUser.password){
      req.session.currentUser = foundUser;
      res.json(foundUser)
      console.log('********', req.session.currentUser._id)
      return console.log('logged in.')
    }
  })
}

const logout = (req, res) => {
  console.log('logout hit route hit')
  req.session.destroy((err) => {
    if (err) console.log(err)
    console.log('db logout hit')
    res.json('User Logged Out')
    
  })
}

const destroy = (req, res) => {
  console.log('destroy route hit')
}

module.exports = {
  create,
  login,
  logout,
  destroy
}