const db = require("../config/connection");
const collections = require("../config/collections");
const generateTocken = require("../tocken/generateTocken");
const bcrypt = require("bcrypt");

const messages = {
  login_passwordErr: "Password is not correct",
  login: "Login success",
  loginEmailErr: "Admin email is not correct",
  addJob:"Job added successfully",
  addJobErr:"Something error in job posting"
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
            token: generateTocken(data._id),
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
      req.body.date=new Date().toISOString().slice(0,10)
      console.log('ooooo',req.body);
    // db.get()
    //   .collection(collections.JOB_COLLECTION)
    //   .insertOne(req.body)
    //   .then(() => {
    //     res
    //       .status(201)
    //       .json({
    //         message: messages.addJob,
    //       })
    //       .catch(() => {
    //         res.status(401).json({
    //           message: messages.addJobErr,
    //         });
    //       });
    //   });
  },


};
