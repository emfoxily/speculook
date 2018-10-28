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
    CSS: Boolean,
    HTML: Boolean,
    JavaScript: Boolean,
    jQuery: Boolean,
    Angular: Boolean,
    CLI: Boolean,
    React: Boolean,
    Ruby: Boolean
  },
  mailbox: [
    {
      mail: String,
      sender: String
    }
  ]
})

const User = mongoose.model('User', users)

// export users
module.exports = User
