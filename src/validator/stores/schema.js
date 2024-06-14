const Joi = require('joi');

const StoreSchema = Joi.object({
  name: Joi.string().required().max(50),
  address: Joi.string().required(),
  rating: Joi.number().required(),
  owner: Joi.string().required(),
});

module.exports = { StoreSchema };