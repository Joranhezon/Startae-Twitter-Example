const express = require('express');
const router = express.Router();
const User = require('../schema/user');

//POST remote method used to create a new user
router.post('/register-user', function(req, res){
  var newUser = new User({
    name: req.body.name,
    twitter_username: req.body.twitter_username
  });

  //Saves new user on the database
  newUser.save(function (err){
    if (!err) {
      //Do nothing
    } else {
      console.log('An error ocurred while registering the user');
    }
  })
});

module.exports = router;
