const db = require('../models')

const create = (req, res) => {
  db.User.create(req.body, (err, newUser) => {
    if(err) console.log(err);
    res.json({newUser});
  //   const settingsObj = {}
  //   settingsObj.user = newUser._id
  //   db.Settings.create(settingsObj, (err, newSettings) => {
  //     if(err) console.log(err);
  //     res.json({newSettings});
  // })
  })
}

const update = (req, res) => {
  db.User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, columnOrder) => {
      if(err) console.log(err);
      res.json(columnOrder);
    }
  )
}

// const login = (req, res) => {
//   db.User.findOne({username: req.body.username}, (err, foundUser) => {
//     if (!foundUser) return console.log('No User Found')
//     if (req.body.password !== foundUser.password) {
//       return console.log('Incorrect Password')
//     }
//     if (req.body.password === foundUser.password){
//       req.session.currentUser = foundUser;
//       res.json(foundUser)
//       return console.log('Logged In.')
//     }
//   })
// }

// const logout = (req, res) => {
//   req.session.destroy((err) => {
//     if (err) console.log(err)
//     res.json('User Logged Out')
//   })
// }

// const destroy = (req, res) => {
//   console.log('Destroy Route Hit')
// }

module.exports = {
  create,
  update,
  // login,
  // logout,
  // destroy
}