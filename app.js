var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const blogsRouter = require("./routes/blogs");

var app = express();
//invoke middleware
//middleware: functions are used during a request to a specfic route

//logger comes from the morgan. Helps us console log the request coming in
app.use(logger("dev"));

//middleware that helps us read JSON frm incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/blogs", blogsRouter);

module.exports = app;
