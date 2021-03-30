const db = require('../models')

const create = (req, res) => {
  console.log(req.body)
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    // res.json(newUser)
    const settingsObj = {}
    settingsObj.user = newUser._id
    db.Settings.create(settingsObj, (err, newSettings) => {
      if(err) console.log(err);
      res.json({newSettings});
  })
  })
}

// const create = (req, res) => {
//   console.log('setting controller page:::::::::', req.session.currentUser)
//   //Establishes settings  user on default creation.
//   const settingsObj = req.body
//   settingsObj.user = req.session.currentUser._id
//   db.Settings.create(settingsObj, (err, newSettings) => {
//     if(err) console.log(err);
//     res.json({newSettings});
//   })
// }

const login = (req, res) => {
  console.log(req.body)
  db.User.findOne({company: req.body.company}, (err, foundUser) => {
    if (!foundUser) return console.log('no user found')
    if (req.body.password !== foundUser.password) return console.log('incorrect password')
    if (req.body.password === foundUser.password){
      req.session.currentUser = foundUser;
      res.json(foundUser)
      console.log('********', req.session.currentUser)
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