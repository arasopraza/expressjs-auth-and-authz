const UserRepositories = require('../repositories');
const response = require('../../../utils/response');

const createUser = async (req, res) => {
  try {
    const { username, password, fullname } = req.body;
    const user = await UserRepositories.createNewUser({ username, password, fullname });
    return response(res, 201, 'User Created Successfully', user);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await UserRepositories.getAllUsers();
    const response = {
      data: users,
      message: 'All users fetched successfully',
    };

    return response(res, 200, 'All users fetched successfully', users);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

module.exports = {
  createUser,
  getAllUsers
};
