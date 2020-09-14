const { isEmail } = require('validator');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



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

//hashing the password
//this function fires before is doc saved to db 
userSchema.pre( 'save', async function (next){
  const salt = await bcrypt.genSalt();
  this.pass = await bcrypt.hash(this.pass, salt);
  next();
});

// Static method for USer Login
userSchema.statics.login = async function(email, pass) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(pass, user.pass);
    if (auth) {
      return user; // Only then Creates a jwt as user is returned
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

const User = mongoose.model("User", userSchema);

module.exports = User;