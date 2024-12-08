const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  subscriptions: [{ type: String }], // The RSS source URLs that the user is subscribed to
});

module.exports = mongoose.model('User', UserSchema);