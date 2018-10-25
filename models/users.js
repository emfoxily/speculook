// require mongoose
const mongoose = require('mongoose')

// user schema
const users = new.mongoose.Schema({
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
  }
})

const User = mongoose.model('User', users)

// export users
module.exports = User
