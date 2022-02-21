const express = require("express");
const adminController = require("../controller/adminController");
const db = require("../config/connection");
const jwt = require("jsonwebtoken");



const tockenVerify = (req,res,next)=>{
    const decord = jwt.verify(req.body.token,process.env.ACCESS_TOCKEN)

}

const router = express.Router();

router.post("/login",adminController.AdminLogin);
router.post("/addJob",adminController.AddJob);

module.exports = router;
