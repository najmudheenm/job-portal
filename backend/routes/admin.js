const express = require("express");
const adminController = require("../controller/adminController");
const db = require("../config/connection");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", adminController.AdminLogin);
router.post("/addJob", adminController.AddJob);
router.get("/jobList", adminController.GetAllJobPost);
router.get("/logout", adminController.AdminLogout);

module.exports = router;
