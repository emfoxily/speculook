const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messages = Schema({
  message: {
    type: String,
    required: true
  },
  userWhoPosted: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
  }
});

const Message = mongoose.model('Message', messages);

module.exports = Message;
