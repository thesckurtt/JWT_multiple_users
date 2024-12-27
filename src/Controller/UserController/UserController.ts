import { FastifyRequest, FastifyReply} from "fastify";

export class UserController {
  public static async home(request: FastifyRequest, reply: FastifyReply) {
    return { message: "Hello World" };
  }
}