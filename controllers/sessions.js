// require express
const express = require('express')
// require session
const session = express.Router()
// require users model
const User = require('../models/users.js')
// require bcrypt
const bcrypt = require('bcrypt')

session.delete('/', (req, res) => {
  req.session.destroy(() => {
    res.status(200).json({
      status: 200,
      message: 'successfully logged out',
    })
  })
})

session.post('/', (req, res) => {
  User.findOne({ username: req.body.username }, (err, foundUser) => {
    if ( bcrypt.compareSync(req.body.password, foundUser.password) ){
      req.session.currentUser = foundUser
      res.status(201).json({
        status: 201,
        message: 'login successful'
      })
    } else {
      res.status(401).json({
        status: 401,
        message: 'username or password was incorrect'
      })
    }
  })
})

module.exports = session
