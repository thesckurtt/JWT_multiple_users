import Joi from "joi";

export const BlackListSchema = Joi.object({
  token: Joi.string().required(),
});
