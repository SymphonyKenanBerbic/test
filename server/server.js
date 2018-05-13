const path = require('path');
const express = require('express');
const ROOT_PATH = path.join(__dirname, '../build');

const app = express();
app.use(express.static(ROOT_PATH));

app.use("/", express.static(ROOT_PATH, {index: "index.html"}));
app.use("*", express.static(ROOT_PATH, {index: "index.html"}));

module.exports = app;
