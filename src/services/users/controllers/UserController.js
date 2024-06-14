const UserRepositories = require('../repositories');
const response = require('../../../utils/response');
const validator = require('../../../validator/users');

const createUser = async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    const { error, value } = validator.validatePayload(req.body);

    if (error) {
      return response(res, 400, error.message, null);
    }

    req.body = value;

    const user = await UserRepositories.createNewUser({ username, password, fullname });
    return response(res, 201, 'User Created Successfully', user);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserRepositories.getAllUsers();
    return response(res, 200, 'All users fetched successfully', users);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

module.exports = {
  createUser,
  getAllUsers
};
