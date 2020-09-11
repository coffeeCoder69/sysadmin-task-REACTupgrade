const User = require("../models/User");
const jwt = require("jsonwebtoken");

// To manage errors during submit the form
const handleErrors = (err) => {
  console.log(err.message, err.code); // logging the message and code property(for unique error)

  //sent as json to be sent back to the user 
  let errors = { name:'', email: '', pass: '' };

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

// create json web token
const maxAge = 5 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'superSecretString3825', {
    expiresIn: maxAge
  });
};


// controller actions
module.exports.signup_get = (req, res) => {
  res.render("signup");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.signup_post = async (req, res) => {
  const { name ,email, pass } = req.body;

  try {
    const user = await User.create({ name, email, pass });
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } 
  catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
  // console.log(req.body);
  // res.send("User SignUp");
};

module.exports.login_post = async (req, res) => {
  const { email, pass } = req.body;
  console.log(email);
  console.log(pass);
  res.send("User Login");
};
