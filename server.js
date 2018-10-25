//Require Express
const express = require('express');
const app = express();
//Require Mongoose
const mongoose = require('mongoose');
//Require bcrypt
const bcrypt = require('bcrypt');
//Require Schema
const Users = require('./models/users.js');
const seed = require('./models/userSeed.js');
//Require Controller
const usersController = require('../controllers/users.js');

//Express
app.use(express.json());
app.use(express.static('public'));
//Call Controller
app.use('/speculook', usersController);

//Mongoose Middleware
mongoose.connect('mongodb://localhost:27017/speculook', { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
  console.log('Connected to Mongoose');
});

//Listener
app.listen(3000, ()=>{
  console.log('Listening..');
});
