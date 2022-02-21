const express = require("express");
const adminController = require("../controller/adminController");
const db = require("../config/connection");
const jwt = require("jsonwebtoken");

const tokenVerify = (req, res, next) => {
  const decord = jwt.verify(req.body.token, process.env.ACCESS_TOKEN);
};

const router = express.Router();

router.post("/login", adminController.AdminLogin);
router.post("/addJob", adminController.AddJob);
router.get("/jobList", adminController.GetAllJobPost);

module.exports = router;
