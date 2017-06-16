const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: { type: String, required: true },
  twitter_username: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);
