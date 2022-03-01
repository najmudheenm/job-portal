const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user");
const adminRouter = require("./routes/admin");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

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
app.use(fileUpload());

db.connect((err) => {
  if (err) {
    console.log("connection err", err);
  } else {
    console.log("database connected");
  }
});

app.use("/", userRouter);
app.use("/admin", adminRouter);

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
});

app.listen(3002, console.log("server started"));

module.exports = app;
