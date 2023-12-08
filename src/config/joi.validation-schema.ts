import * as Joi from 'joi';

export const EnvValidationSchema = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3000),
  DEFAULT_LIMIT: Joi.number().default(15),
  ENVIROMENT: Joi.string().default('dev'),
});
