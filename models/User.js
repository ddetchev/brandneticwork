const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
    required: true
  },
  publicKey: {
    type: String,
    required: true
  },
  loggedIn: {
    type: String,
    required: true
  },
  contractsSent: {
    type: Array,
    required: true
  },
  contractsReceived: {
    type: Array,
    required: true
  }
});
module.exports = User = mongoose.model("users", UserSchema);