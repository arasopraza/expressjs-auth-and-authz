const { UserSchema } = require('./schema');

const UsersValidator = {
  validatePayload: (payload) => {
    const { error, value } = UserSchema.validate(payload);
    
    if (error) {
      return { error };
    }

    return { value };
  },
};

module.exports = UsersValidator;
