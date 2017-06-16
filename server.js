// Used to set up dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Used to store the API routes created
const userRemoteMethods = require('./server/routes/user');

const app = express();

mongoose.connect('mongodb://localhost/startae-twitter', function(err){
  if(!err) {
    // Runs the app normally
  } else {
    console.log('There was an error while connecting to the database.')
  }
});

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// References dist folder created by angular build
app.use(express.static(path.join(__dirname, 'dist')));


//Sets up the api
app.use('/user', userRemoteMethods);

// Catch all other routes provided by angular and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Get port from environment and store in Express.
const port = process.env.PORT || '3000';
app.set('port', port);

//Creates server
const server = http.createServer(app);

// Sets the api to run on the provived port
server.listen(port, () => console.log(`Server running on localhost:${port}`));

module.exports = server;
