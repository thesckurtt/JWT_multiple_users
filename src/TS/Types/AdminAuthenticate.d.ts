import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

declare module "fastify" {
  interface FastifyInstance {
    AdminAuthenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
  }
}