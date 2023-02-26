const express = require("express");
const app = express();
const errors = require("./error");

app.use("", express.static("public"));

app.use(require("./middlewares"));
app.use(require("./routes"));

app.use(errors.notFoundHandler);
app.use(errors.errorHandler);

module.exports = app;
