const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { isEmail } = require('validator');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter an name'],
  },
  email: {
    type: String,
    unique: true,
    required:  [true, 'Please enter an email'],
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  pass: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters']
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;