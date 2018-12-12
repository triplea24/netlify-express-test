"use strict";
const express = require("express");
const serverless = require("serverless-http");
const app = express();

var jsonServer = require("json-server");

app.use("/api", jsonServer.router("db.json"));

module.exports = app;
module.exports.handler = serverless(app);
