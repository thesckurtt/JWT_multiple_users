import { FastifyRequest, FastifyReply } from "fastify";

export async function AdminMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  console.log("Middleware Admin");
}
