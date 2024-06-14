const { StoreSchema } = require('./schema');

const StoresValidator = {
  validatePayload: (payload) => {
    const { error, value } = StoreSchema.validate(payload);

    if (error) {
      return { error };
    }

    return { value };
  },
};

module.exports = StoresValidator;
