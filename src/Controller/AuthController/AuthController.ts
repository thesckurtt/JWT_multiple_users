import { FastifyRequest, FastifyReply } from "fastify";
import { AuthControllerLoginSchema } from "./Schemas/AuthControllerLoginSchema.js";
import { Authenticator } from "../../Utils/Authenticator.js";
import { Users } from "../../Database/Models/Users.js";
import { app } from "../../server.js";
import { env_JWT_EXPIRATION_TIME } from "../../Config/env_config.js";

export class AuthController {
  static async login(request: FastifyRequest, reply: FastifyReply) {
    const { error, value } = Authenticator.validateBody(
      AuthControllerLoginSchema,
      request
    );

    if (error) {
      return reply.code(400).send({ error: error.details[0].message });
    }

    const isValidUser = await Users.isValidUser(value.email, value.password);

    if (isValidUser.isValid) {
      if (isValidUser?.user?.isAdmin) {
        return {
          token: app.jwt.sign(
            { isAdmin: true, userId: isValidUser?.user?.id },
            { expiresIn: env_JWT_EXPIRATION_TIME }
          ),
        };
      }
      return {
        token: app.jwt.sign(
          { isAdmin: false, userId: isValidUser?.user?.id },
          { expiresIn: env_JWT_EXPIRATION_TIME }
        ),
      };
    }else{
      return reply.code(401).send({error: "Invalid email or password"})
    }
  }
}
