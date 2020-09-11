const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { isEmail } = require('validator');

const bcrypt = require('bcrypt');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please enter a name'],
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

//hashing the password
//this function fires before doc is saved to db
userSchema.pre( 'save', async function (next){
  const salt = await bcrypt.genSalt();
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;