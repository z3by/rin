const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");

const migrateDB = require("./controllers/migrate.controller");

// init the database
migrateDB();

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/", indexRouter);
app.use("/api", apiRouter);
app.get("*", (req, res) => {
  res.redirect("/");
});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
