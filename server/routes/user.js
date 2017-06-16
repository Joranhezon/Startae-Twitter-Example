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
  newUser.save((err) => {
    if (!err) {
      //Returns default sucessfull status
      res.json(serverResponse);
    } else {
      //Sets error messages and status to notify the status of the requests
      serverResponse.setStatus('400');
      serverResponse.setDescription(err.toString());
      res.json(serverResponse);
    }
  });
});

//PUT remote method used to edit an existing user
router.put('/edit-user', function(req, res){
  //Creates a server response object to notify the status of the request
  var serverResponse = new ServerResponse();

  //Method used to update an existing user
  const condition = { twitter_username: req.body.old_twitter_username};
  User.findOne(condition, (err, foundUser) => {
    if (!err && foundUser != null) {
      User.update(condition, { twitter_username: req.body.twitter_username, name: req.body.name}, (err) => {
        if (!err) {
          //Returns default sucessfull status
          res.json(serverResponse);
        } else {
          //Creates a new error
          //Sets error messages and status to notify the status of the requests
          serverResponse.setStatus('400');
          serverResponse.setDescription(err.toString());
          res.json(serverResponse);
        }
      });
    } else {
      //Creates new error for the server response
      const error = 'Could not find any user with this username.'
      //Sets error messages and status to notify the status of the requests
      serverResponse.setStatus('400');
      serverResponse.setDescription(error);
      res.json(serverResponse);
    }
  });
});

//DELETE remote method used to delete an existing user
router.delete('/delete-user', function(req, res){
  //Creates a server response object to notify the status of the request
  var serverResponse = new ServerResponse();

  const condition = {twitter_username: req.body.twitter_username};
  User.findOne(condition, (err, foundUser) => {
    if (!err && foundUser != null) {
      //Deletes user based on his twitter username
      User.remove(condition, (err) => {
        if (!err) {
          //Returns default sucessfull status
          res.json(serverResponse);
        } else {
          //Sets error messages and status to notify the status of the requests
          serverResponse.setStatus('400');
          serverResponse.setDescription(err.toString());
          res.json(serverResponse);
        }
      });
    } else {
      //Creates new error for the server response
      const error = 'Could not find any user with this username.'
      //Sets error messages and status to notify the status of the requests
      serverResponse.setStatus('400');
      serverResponse.setDescription(error);
      res.json(serverResponse);
    }
  });
});

module.exports = router;
