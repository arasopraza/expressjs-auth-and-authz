const express = require('express');
const app = express();
const routes = require('../routes');
const ErrorHandler = require('../middlewares/ErrorHandler');

app.use(express.json());
app.use(routes);
app.use(ErrorHandler);

module.exports = app;