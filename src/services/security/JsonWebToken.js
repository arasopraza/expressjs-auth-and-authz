require('dotenv').config();
const jwt = require('jsonwebtoken');

class JsonWebToken {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  async sign(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  async verify(token) {
    return jwt.verify(token, this.secret);
  }
}

module.exports = new JsonWebToken();