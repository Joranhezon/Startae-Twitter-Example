const express = require('express');
const router = express.Router();
const User = require('../schema/user');
const ServerResponse = require('../auxilary/serverResponse');

//POST remote method used to create a new user
router.post('/register-user', function(req, res) {
  //Creates the object that will be used to populate the database
  var newUser = new User({
    name: req.body.name,
    twitter_username: req.body.twitter_username
  });

  //Creates a server response object to notify the status of the request
  var serverResponse = new ServerResponse();

  //Saves new user on the database
  newUser.save(function (err){
    if (!err) {
      //Returns default sucessfull status
      return serverResponse;
    } else {
      //Sets error messages and status to notify the status of the requests
      serverResponse.setStatus('400');
      serverResponse.setStatus(err.toString());
      return serverResponse;
    }
  });
});

//DELETE remote method used to delete an existing user
router.delete('/delete-user', function(req, res){
  //Creates a server response object to notify the status of the request
  var serverResponse = new ServerResponse();

  //Deletes user based on his twitter_username
  User.remove({ twitter_username: req.body.twitter_username }, function(err) {
    if (!err) {
      //Returns default sucessfull status
      return serverResponse;
    } else {
      //Sets error messages and status to notify the status of the requests
      serverResponse.setStatus('400');
      serverResponse.setStatus(err.toString());
      return serverResponse;
    }
  });
});

module.exports = router;
