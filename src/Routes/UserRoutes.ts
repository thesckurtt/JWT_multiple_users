import { UserController } from "../Controller/UserController/UserController.js";
import { FastifyInstance } from "fastify";
export async function userRoutes(fastify: FastifyInstance) {
  fastify.addHook("onRequest", fastify.UserAuthenticate);
  fastify.get("/", UserController.home);  
}
