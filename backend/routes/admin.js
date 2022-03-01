const express = require("express");
const adminController = require("../controller/adminController");
const db = require("../config/connection");
const collections = require("../config/collections");
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.Token;
  if(!token){
    res.status(401).json({
      message:"User not logged"
    })
  }else{
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    db.get()
      .collection(collections.ADMIN_COLLECTION)
      .findOne({ email: decoded.email })
      .then((response) => {
        if (response) {
          next();
        } else {
          res.status(401).json({
            message: "Your login session is expired",
          });
        }
      });
  }
 

};

const router = express.Router();

router.post("/login", adminController.AdminLogin);
router.post("/addJob", verifyToken, adminController.AddJob);
router.get("/jobList", adminController.GetAllJobPost);
router.get("/logout", adminController.AdminLogout);
router.patch("/deleteJob", verifyToken, adminController.DeleteJob);
router.get("/appliedJob",  verifyToken,  adminController.GetJobwiseAppliedDetails);
router.patch("/updateapplyStatus",  verifyToken,  adminController.UpdateApplyStatus);

module.exports = router;
