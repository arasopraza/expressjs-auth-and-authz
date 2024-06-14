const TokenManager = require('../services/security/JsonWebToken');

const authenticateJWT = (req, res, next) => {
  const token = req.headers.authorization;
  if (token && token.indexOf('Bearer ') !== -1) {
    try {
      const user = TokenManager.verify(token.split('Bearer ')[1], process.env.JWT_SECRET);
      req.user = user;
      return next();
    } catch (error) {
      res.sendStatus(403);
    }
  }

  res.sendStatus(401);
};

module.exports = authenticateJWT;