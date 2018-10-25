const express = require('express');
const router = express.Router();
const Users = require('../models/users.js');

// GET route
router.get('/', (req, res)=> {
  Users.find({}, (err, foundUsers) => {
    res.json(foundUsers);
  })
})
// DELETE ROUTE
router.delete('/:id', (req, res)=> {
  Users.findByIdAndRemove(req.params.id, (err, deletedUser)=> {
    res.json(deletedUser);
  })
})
// POST ROUTE
router.post('/', (req, res) => {
  Users.create(req.body, (err, createdUser)=> {
    res.json(createdUser);
  })
})
// PUT ROUTE
router.put('/:id', (req, res)=> {
  Users.findByIdAndUpdate(req.params.id, req.body,
  {new:true}, (err, updatedUser) => {
    res.json(updatedTodo)
  })
})

module.exports = router;
