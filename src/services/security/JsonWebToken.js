require('dotenv').config();
const jwt = require('jsonwebtoken');
const ClientError = require('../../exceptions/ClientError');

class JsonWebToken {
  constructor() {
    this.secret = process.env.JWT_SECRET;
  }

  async sign(payload) {
    return jwt.sign(payload, this.secret, { expiresIn: '1h' });
  }

  async verify(token) {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        throw new ClientError('Token has expired', 401);
      }
      throw error;
    }
  }
}

module.exports = new JsonWebToken();