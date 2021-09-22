// import module `express`
const express = require('express');
const path = require('path');

const app = express();

const controller = require('../controller/controller.js');

app.get('/', controller.getHomePage);
app.get('/home', controller.getHomePage);

module.exports = app;