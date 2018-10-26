const express = require('express');
const router = express.Router();
const Messages = require('..models/messages.js');

router.get('/messages', (req, res)=> {
  Messages.find({}, (err, foundMessages)=> {
    res.json(foundMessages);
  })
});

router.delete('/messages/:id', (req, res)=> {
  Messages.findByIdAndRemove(req.params.id, (err, deletedMessage)=> {
    res.json(deletedMessage);
  })
})

router.post('/messages', (req, res)=> {
  Messages.create(req.body, (err, createdMessage) => {
    res.json(createdMessage);
  })
})

router.put('/messages/:id', (req, res) => {
  Messages.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedMessage)=> {
    res.json(updatedMessage)
  })
})

module.exports = router;
