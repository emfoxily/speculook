//Require Express
const express = require('express');
const app = express();
//Require Express session
const session = require('express-session')
//Require Mongoose
const mongoose = require('mongoose');
//Require bcrypt
const bcrypt = require('bcrypt');
//Require Schema
const Users = require('./models/users.js');
const seed = require('./models/userSeed.js');

// session secret
const secret = process.env.SECRET
app.use(session({
  secret: 'luna',
  resave: false,
  saveUninitialized: false
}))

//Express
app.use(express.json());
app.use(express.static('public'));

app.get('/speculook', (req, res) => {
  if (req.session.currentUser) {
    res.json(req.session.currentUser)
  } else {
    res.status(401).json({
      status: 401,
      message: 'you are not logged in'
    })
  }
})

//Require Controller
const usersController = require('./controllers/users.js');
const sessionsController = require('./controllers/sessions.js')

const messagesController = require('./controllers/messages.js');

//Call Controller
app.use('/users', usersController);
app.use('/messages', messagesController);
app.use('/speculook', sessionsController)

const PORT = process.env.PORT || 3000

const MONGODB_URI = 'mongodb://heroku_wpzg0fnz:h4k2urdrh6dqsfp9udg5790vt7@ds143573.mlab.com:43573/heroku_wpzg0fnz' || 'mongodb://localhost/' + 'speculook'

const uri = 'mongodb://admins:lunafelixote5683@ds143573.mlab.com:43573/heroku_wpzg0fnz'

//Mongoose Middleware
mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
});
//
// Users.create(seed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log('added users');
// })

app.get('/seedAdmins', (req, res) => {
  // encrypts the passwords
  seed.forEach((user) => {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });
  // creates users using the provided seed
  Users.create(seed, (err, createdAdmins) => {
    // logs the admins
    console.log(createdAdmins);
    // redirects
    res.redirect('/');
  });
});

//Listener
app.listen(PORT, ()=>{
  console.log('Listening..');
});
