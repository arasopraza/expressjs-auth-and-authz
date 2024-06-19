const StoreRepositories = require('../repositories');
const response = require('../../../utils/response');
const validator = require('../../../validator/stores');
const ClientError = require('../../../exceptions/ClientError');

const createStore = async (req, res, next) => {
  try {
    const {
      name,
      address,
      rating
    } = req.body;

    const { id } = req.user;

    const { error, value } = validator.validatePayload(req.body);

    if (error) {
      throw new ClientError(error.message, 400);
    }

    req.body = value;

    const store = await StoreRepositories.createStore({
      name,
      address,
      rating,
      owner: id
    });

    return response(res, 201, 'Store Created Successfully', store);
  } catch (error) {
    next(error);
  }
};

const editStore = async (req, res, next) => {
  try {
    const {
      name,
      address,
      rating,
    } = req.body;

    const { id } = req.params;
    const { id: owner } = req.user;

    const { error, value } = validator.validatePayload(req.body);

    if (error) {
      throw new ClientError(error.message, 400);
    }

    req.body = value;

    const store = await StoreRepositories.editStore({
      id,
      name,
      address,
      rating,
      owner
    });

    return response(res, 200, 'Store edited successfully', store);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createStore,
  editStore
};