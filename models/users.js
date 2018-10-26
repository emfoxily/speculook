// require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema
const users = Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    default: '../images/speculoos.png'
  }
})

const User = mongoose.model('User', users)

// export users
module.exports = User
