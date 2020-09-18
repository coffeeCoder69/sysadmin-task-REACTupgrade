require("dotenv").config();
const jwt = require("jsonwebtoken");

//middleware to check authentication status and then further check if it is an admin or not
const requireAdmin = (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "Radndom Secret", (err, decodedToken) => {
      if (err) {
        res.redirect("/login");
        console.log(err.message);
      } else {
        console.log(decodedToken);
        if (decodedToken.id == process.env.ADMIN_ID) {
          // admin id
          next();
        } else {
          res.redirect("/login");
          console.log(err.message);
        }
      }
    });
  } else {
    res.redirect("/login");
  }
};

module.exports = { requireAdmin };
