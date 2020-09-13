const User = require("../models/User");
const jwt = require('jsonwebtoken');

//! To manage errors during submit the form
const handleErrors = (err) => {
  console.log(err.message, err.code); // logging the message and code property(for unique error)

  //sent as json to be sent back to the user 
  let errors = { name:'', email: '', pass: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'Email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

   return errors;
}

//! to create a jwt during POST signup
const maxAge = 1 * 24 * 60 * 60; // 1 day lifetime JWT (is in seconds)
const createToken = (id) => {
  return jwt.sign({ id }, 'Radndom Secret', {
    expiresIn: maxAge
  });
};

// controller actions
//! GET SignUp
module.exports.signup_get = (req, res) => {
  res.render("signup");
};

//! GET Login
module.exports.login_get = (req, res) => {
  res.render("login");
};


//! POST SignUp
module.exports.signup_post = async (req, res) => {
  const { name ,email, pass } = req.body;

  try {
    const user = await User.create({ name, email, pass });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 }); // cookie takes max time in milliseconds , so *1000
    res.status(201).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err)
    res.status(404).json({errors});
  }
};

//! POST login
module.exports.login_post = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email);
  console.log(pass);
  res.send("User Login");
};
