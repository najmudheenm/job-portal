const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const app = express();

dotenv.config();

const db = require("./config/connection");

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect((err) => {
  if (err) { 
    console.log("connection err", err);
  } else {
    console.log("database connected");
  }
});

app.use("/", userRouter);
app.use("/admin", adminRouter);

app.listen(5000, console.log("server started"));

module.exports = app;
