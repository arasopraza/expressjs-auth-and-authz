const StoreRepositories = require('../repositories');
const response = require('../../../utils/response');

const createStore = async (req, res) => {
  try {
    const {
      name,
      address,
      rating
    } = req.body;

    const { id } = req.user;

    const store = await StoreRepositories.createStore({
      name,
      address,
      rating,
      owner: id
    });

    return response(res, 201, 'Store Created Successfully', store);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

const editStore = async (req, res) => {
  try {
    const {
      name,
      address,
      rating,
    } = req.body;

    const { id } = req.params;
    const { id: owner } = req.user;

    const store = await StoreRepositories.editStore({
      id,
      name,
      address,
      rating,
      owner
    });

    return response(res, 200, 'Store edited successfully', store);
  } catch (error) {
    return response(res, 500, error.message, null);
  }
};

module.exports = {
  createStore,
  editStore
};