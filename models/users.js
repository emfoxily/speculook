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

// export users
module.exports = users
