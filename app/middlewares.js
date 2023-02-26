const express = require("express");
const cors = require("cors");
const middlewares = [
  [
    cors(),
    express.urlencoded({ extended: true, limit: "50mb" }),
    express.json({ limit: "50mb" }),
  ],
];

module.exports = middlewares;
