const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messages = Schema({
  message: {
    type: String,
    required: true
  },
  signature: String,
  userWhoPosted: {
    type: String,
    required: true
  }
});

const Message = mongoose.model('Message', messages);

module.exports = Message;
