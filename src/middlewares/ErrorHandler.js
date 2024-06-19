const response = require("../utils/response");

const ErrorHandler = (err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message || 'Something went wrong';
  response(res, status, message, null);
}

module.exports = ErrorHandler;