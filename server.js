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

//Mongoose Middleware
mongoose.connect('mongodb://localhost:27017/speculook', { useNewUrlParser: true });
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
app.listen(3000, ()=>{
  console.log('Listening..');
});
