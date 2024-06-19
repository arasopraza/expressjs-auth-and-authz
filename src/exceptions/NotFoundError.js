class NotFoundError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NotFoundError';
    this.statusCode = statusCode || 500;
  }
}

module.exports = NotFoundError;
