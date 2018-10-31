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
  initials: {
    type: String
  },
  userImage: {
    type: String,
    default: './images/speculoos.png'
  }
});

const Message = mongoose.model('Message', messages);

module.exports = Message;
