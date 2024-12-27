import { FastifyRequest, FastifyReply } from "fastify";
import { BlackListSchema } from "./Schemas/BlackListSchema.js";
import { Authenticator } from "../../Utils/Authenticator.js";
import { BlackListJWT } from "../../Database/Models/BlackListJWT.js";

export class AdminController {
  static async BlackList_add(request: FastifyRequest, reply: FastifyReply) {
    const { error, value } = Authenticator.validateBody(
      BlackListSchema,
      request
    );
    
    if (error) {
      return reply.code(400).send({ error: error.details[0].message });
    }

    const result = await BlackListJWT.create(value.token);
    if (!result) {
      return reply.code(400).send({ message: "Token not added to blacklist" });
    }else{
      return reply.code(200).send({ message: "Token added to blacklist" });
    }
  }
}
