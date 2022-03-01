const jwt = require("jsonwebtoken");

const generateToken = (email) => {
  return jwt.sign({ email }, process.env.ACCESS_TOKEN, {
    expiresIn: "1d",
  });
};

module.exports = generateToken;
