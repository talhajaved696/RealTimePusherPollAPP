const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Vote = require('../models/Vote');
// Pusher Trigger
const Pusher = require('pusher');

var pusher = new Pusher({
    appId: '847117',
    key: 'f7573633fe29b1c36e50',
    secret: '4d92e5deaa5ea7066910',
    cluster: 'ap2',
    encrypted: true
  });
  
 

router.get('/', (req,res)=>
{
    Vote.find().then(votes => res.json({success: true,votes: votes}));
});

router.post('/', (req,res)=>
{
  const newVote = {
    os:req.body.os,
    points:1
  }
  new Vote(newVote).save().then(vote => {
    pusher.trigger('os-poll', 'os-vote', {
      points: parseInt(vote.points),
      os: vote.os
    });
    return res.json({success: true, message:'Thank you for voting'});
  });
    
});

module.exports = router;