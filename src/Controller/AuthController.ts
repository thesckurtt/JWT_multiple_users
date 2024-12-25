import { FastifyRequest, FastifyReply } from "fastify";

export class AuthController{
  static async login(request: FastifyRequest, reply: FastifyReply) {
    return "Login controller function";
  }
}