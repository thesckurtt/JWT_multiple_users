import { FastifyRequest, FastifyReply } from "fastify";
import { AuthControllerLoginSchema } from "./Schemas/AuthControllerLoginSchema.js";
import { Authenticator } from "../../Utils/Authenticator.js";
import { Users } from "../../Database/Models/Users.js";
import { app } from "../../server.js";

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

    console.log(isValidUser?.user?.email);

    if (isValidUser.isValid) {
      if (isValidUser?.user?.isAdmin) {
        return app.jwt.sign({ isAdmin: true }, { expiresIn: "1h" });
      }
      return app.jwt.sign({ isAdmin: false }, { expiresIn: "1h" });
    }
  }
}
