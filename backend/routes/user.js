const express = require("express");
const userController = require("../controller/usercontroller");

const router = express.Router();

router.post("/applyjob", userController.ApplyJob);
router.post("/resume", userController.RESUME);
router.get("/userAppliedJob", userController.UserWiseAppliedDetails);

module.exports = router;
