const mongoose = require('mongoose');
const User = require('../server/schema/user');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');

//Used for shortcut
let expect = chai.expect;

chai.use(chaiHttp);
//Used to drop the database before each test
describe('User Tests', function() {
  //Drops database before each test session begins
  before((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  //Drops database after each test session finishes
  after((done) => {
    User.remove({}, (err) => {
      done();
    });
  });

  it('should register an user', function(done) {
    //Object used by the POST method
    var testUser = new User({
      name: 'Matheus',
      twitter_username: 'Moxiar'
    })

    //Connecting to the server and issuing request
    chai.request(server)
    .post('/user/register-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('200');
      done();
    });
  });

  it('should not register an user without a username', function(done) {
    //Incorrect object used by the POST method
    var testUser = new User({
      name: 'Matheus'
    })

    //Connecting to server and issuing test
    chai.request(server)
    .post('/user/register-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('400');
      done();
    });
  });

  it('should not register an user without a name', function(done) {
    //Incorrect object used by the POST method
    var testUser = new User({
      twitter_username: 'Matheus'
    })

    //Connecting to server and issuing test
    chai.request(server)
    .post('/user/register-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('400');
      done();
    });
  });

  it('should edit an existing user', function(done) {
    //Object used by the PUT method
    var testUser = {
      name: 'Matheus',
      old_twitter_username: 'Moxiar',
      twitter_username: 'Juju-chan'
    }

    //Connecting to server and issuing test
    chai.request(server)
    .put('/user/edit-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('200');
      done();
    });
  });

  it('should not edit an non-existing user', function(done) {
    //Incorrect object
    var testUser = {
      name: 'Matheus',
      old_twitter_username: 'Xablau',
      twitter_username: 'Juju-chan'
    }

    //Connecting to server and issuing test
    chai.request(server)
    .put('/user/edit-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('400');
      done();
    });
  });

  it('should not edit an empty user', function(done) {
    //Empty object
    var testUser = {}

    //Connecting to server and issuing test
    chai.request(server)
    .put('/user/edit-user')
    .send(testUser)
    .end((err, res) => {
      expect(res.body['status']).to.equal('400');
      done();
    });
  });
});
