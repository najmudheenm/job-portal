const db = require("../config/connection");
const collections = require("../config/collections");
const generateToken = require("../token/generateToken");
const bcrypt = require("bcrypt");
const objectId = require("mongodb").ObjectId;

//This is json messages . It is helpful for to edit easly
const messages = {
  login_passwordErr: "Password is not correct",
  login: "Login success",
  loginEmailErr: "Admin email is not correct",
  addJob: "Job added successfully",
  addJobErr: "Something error in job posting",
  successRequest: "Your request completed successfully",
  notFound: "Not Found any data",
  logout: "Logout successfull",
};

module.exports = {
  AdminLogin: async (req, res) => {
    if (req.body.email === "admin@gmail.com") {
      const admin = await db
        .get()
        .collection(collections.ADMIN_COLLECTION)
        .findOne({ email: "admin@gmail.com" });
      if (admin == null) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        db.get()
          .collection(collections.ADMIN_COLLECTION)
          .insertOne(req.body)
          .then((response) => {
            res.status(201).json({
              message: "Success",
            });
          });
      } else {
        const data = await db
          .get()
          .collection(collections.ADMIN_COLLECTION)
          .findOne({ email: req.body.email });
        if (data) {
          bcrypt
            .compare(req.body.password, data.password)
            .then(() => {
              const token = generateToken(data.email);
              const expireDate = new Date(
                new Date().getTime() + 60 * 60 * 24 * 1000
              );
              res
                .status(200)
                .cookie("Token", token, {
                  expires: expireDate,
                  httpOnly: true,
                })
                .json({
                  message: messages.login,
                  email: data.email,
                  tokenExpires: expireDate,
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
      }
    } else {
      res.status(401).json({
        message: messages.loginEmailErr,
      });
    }
  },
  AddJob: (req, res) => {
    // This function is used to create a new job post
    req.body.status = "active";
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
      .find({ status: "active" })
      .toArray()
      .then((response) => {
        res.status(200).json({
          message: messages.successRequest,
          response,
        });
      });
  },
  AdminLogout: (req, res) => {
    res.cookie("Token",null, {
        expires:new Date(Date.now()),
        httpOnly:true
      })
      .json({
        message: messages.logout,
      });
  },
  DeleteJob: (req, res) => {
    db.get()
      .collection(collections.JOB_COLLECTION)
      .updateOne(
        { _id: objectId(req.query.id) },
        { $set: { status: "inactive" } }
      )
      .then(() => {
        res.status(200).json({
          message: messages.successRequest,
        });
      });
  },
  GetJobwiseAppliedDetails: (req, res) => {
    const jobId = req.query.jobId;
    db.get()
      .collection(collections.APPLY_JOB_COLLECTIONS)
      .find({ jobId: jobId })
      .toArray()
      .then((response) => {
        res.status(200).json({
          message: messages.successRequest,
          data: response,
        });
      })
      .catch((err) => {
        res.status(401).json({
          message: messages.notFound,
          err,
        });
      });
  },
  UpdateApplyStatus: (req, res) => {
    db.get()
      .collection(collections.APPLY_JOB_COLLECTIONS)
      .updateOne(
        { jobId: req.body.jobId, email: req.body.email },
        { $set: { applyStatus: req.body.applyStatus } }
      )
      .then((response) => {
        if (response.matchedCount === 1) {
          res.status(200).json({
            message: messages.successRequest,
          });
        } else {
          res.status(401).json({
            message: messages.notFound,
          });
        }
      })
      .catch((err) => {
        res.status(401).json({
          message: messages.notFound,
          err,
        });
      });
  },
};
