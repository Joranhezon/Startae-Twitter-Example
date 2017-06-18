const express = require('express');
const router = express.Router();
const ServerResponse = require('../auxilary/serverResponse');
const Twitter = require('twitter');

//Used to issue a connection to twitter
const twitter = new Twitter({
    consumer_key:'p70DHtJDqCSHDDACkVfikYUNH',
    consumer_secret:'mD1PVwpNUg8pdMfkmQxkmWbxN2kxolNYeCyJD33HwiXA28W1pP',
    access_token_key:'876237838978875392-xfZn85TJV9CVmMFvef13RLUV1WUmojI',
    access_token_secret:'x8IJKBuDOlNnqVqLjpGxhV2O4cJDXccDr5OoOqwaU4ZQY'
  });

//POST remote method used to get tweets
router.post('/get-tweets', function(req, res) {

  twitter.get('/statuses/user_timeline', { screen_name: req.body.twitter_username, count: 5}, function(err, tweet){
    if(!err && tweet != null) {
      //Returns the tweets asked by the user
      res.json(tweet);
    } else {
      //Creates a new error message
      var errorMessage = 'We were not able to get the tweets of this user.'
      //Returns an error status message
      var serverResponse = new ServerResponse();
      serverResponse.setStatus('400');
      serverResponse.setDescription(errorMessage);
    }
  });
});

module.exports = router;
