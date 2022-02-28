const express = require("express");
const userController = require("../controller/usercontroller");

const router = express.Router();

router.post("/applyjob", userController.ApplyJob);

module.exports = router;
