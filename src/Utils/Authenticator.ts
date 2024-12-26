import Joi from "joi";
import { FastifyRequest } from "fastify";

export class Authenticator {
  public static validateBody(
    schema: Joi.ObjectSchema<any>,
    request: FastifyRequest
  ) {
    const { error, value } = schema.validate(request.body);

    return { error, value };
  }

  public static validateAny(schema: Joi.ObjectSchema<any>, data: object) {
    const { error, value } = schema.validate(data);
    return { error, value };
  }
}
