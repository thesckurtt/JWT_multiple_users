import { FastifyRequest, FastifyReply } from "fastify";
import { AuthControllerLoginSchema } from "./Schemas/AuthControllerLoginSchema.js";

export class AuthController {
  static async login(request: FastifyRequest, reply: FastifyReply) {
    const { error, value } = AuthControllerLoginSchema.validate(request.body);

    if (error) {
      return reply.code(400).send({ error: error.details[0].message });
    }

    const { ...params } = value;

    console.log(params.email);
  }
}
