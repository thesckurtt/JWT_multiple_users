import { FastifyInstance,FastifyRequest, FastifyReply } from 'fastify';

export async function AdminRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", fastify.AdminAuthenticate);
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply)=>{
    return "Hello Admin!"
  })
}