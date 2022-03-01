const db = require("../config/connection");
const collections = require("../config/collections");

//This is json messages . It is helpful for to edit easly
const messages = {
  applyjob: "Job applied successfully",
  applyjobErr: "Somthing error in job applying",
  AlreadyApplied:"You already applied this job"
};

module.exports = {
  ApplyJob: async (req, res) => {
    const file = req.files.uploadFile;
    req.body.applyStatus = 'pending'
    db.get().collection(collections.APPLY_JOB_COLLECTIONS).find({$and:[{email:req.body.email},{jobId: req.body.jobId}]}).toArray().then((response)=>{
      if(response.length === 0){
        db.get()
        .collection(collections.APPLY_JOB_COLLECTIONS)
        .insertOne(req.body)
        .then(() => {
          if (file) {
            file.mv("./File_Uploads/" + file.name)
          }
          res.status(201).json({
            message: messages.applyjob,
          });
        })
        .catch((err) => {
          res.status(401).json({
            message: messages.applyjobErr,
            err,
          });
        });
      }else{
        res.status(401).json({
          message:messages.AlreadyApplied
        })
      }
    })


  },
};
