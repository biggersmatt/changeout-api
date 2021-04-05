const db = require('../models')

const create = (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
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
  db.User.findOne({company: req.body.company}, (err, foundUser) => {
    if (!foundUser) return console.log('No User Found')
    if (req.body.password !== foundUser.password) {
      return console.log('Incorrect Password')
    }
    if (req.body.password === foundUser.password){
      req.session.currentUser = foundUser;
      res.json(foundUser)
      return console.log('Logged In.')
    }
  })
}

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log(err)
    res.json('User Logged Out')
  })
}

const destroy = (req, res) => {
  console.log('Destroy Route Hit')
}

module.exports = {
  create,
  login,
  logout,
  destroy
}