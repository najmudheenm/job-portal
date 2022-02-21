const db = require("../config/connection");
const collections = require("../config/collections");
const generateToken = require("../token/generateToken");
const bcrypt = require("bcrypt");

//This is json messages . It is helpful for to edit easly
const messages = {
  login_passwordErr: "Password is not correct",
  login: "Login success",
  loginEmailErr: "Admin email is not correct",
  addJob: "Job added successfully",
  addJobErr: "Something error in job posting",
  successRequest: "Your request completed successfully",
  notFound: "Not Found any data",
};

module.exports = {
  AdminLogin: async (req, res) => {
    req.body.password = await bcrypt.hash(req.body.password, 10);

    const data = await db
      .get()
      .collection(collections.ADMIN_COLLECTION)
      .findOne({ email: req.body.email });
    if (data) {
      bcrypt
        .compare(req.body.password, data.password)
        .then(() => {
          res.status(200).json({
            message: messages.login,
            email: data.email,
            token: generateToken(data._id),
          });
        })
        .catch(() => {
          res.status(401).json({
            message: messages.login_passwordErr,
          });
        });
    } else {
      res.status(401).json({
        message: messages.loginEmailErr,
      });
    }
  },
  AddJob: (req, res) => {
    // This function is used to create a new job post
    db.get()
      .collection(collections.JOB_COLLECTION)
      .insertOne(req.body)
      .then(() => {
        res.status(201).json({
          message: messages.addJob,
        });
      })
      .catch(() => {
        res.status(401).json({
          message: messages.addJobErr,
        });
      });
  },
  GetAllJobPost: (req, res) => {
    db.get()
      .collection(collections.JOB_COLLECTION)
      .find()
      .toArray()
      .then((response) => {
        res.status(200).json({
          message: messages.successRequest,
          response,
        });
      });
  },
};
