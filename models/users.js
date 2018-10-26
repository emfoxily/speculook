// require mongoose
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// user schema
const users = Schema({
  name: {
    type: String,
    required: true
  },
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
  },
  location: String,
  email: String,
  linkedIn: String,
  github: String,
  facebook: String,
  interests: String,
  iCanHelp: {
    css: Boolean,
    html: Boolean,
    js: Boolean,
    jQ: Boolean,
    ang: Boolean,
    cli: Boolean,
    react: Boolean,
    ruby: Boolean
  }
})

const User = mongoose.model('User', users)

// export users
module.exports = User
