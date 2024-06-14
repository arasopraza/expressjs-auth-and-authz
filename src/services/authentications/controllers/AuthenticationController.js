const AuthRepositories = require('../repositories');
const TokenManager = require('../../security/JsonWebToken');
const response = require('../../../utils/response');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const id = await AuthRepositories.verifyUserCredential({ username, password });
    const accessToken = await TokenManager.sign({ id });

    return response(res, 200, 'Login Success', { accessToken });
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

module.exports = {
  login,
};