const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");


const app = express();

const db = require("./config/connection");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

db.connect((err)=>{
    if(err){
        console.log("connection err",err);
    }else{
        console.log('database connected');
    }
})

app.use("/",userRouter);
app.use("/admin",adminRouter);



app.listen(5000,console.log('server started'));

module.exports = app;

