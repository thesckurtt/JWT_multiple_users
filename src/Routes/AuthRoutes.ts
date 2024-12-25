import { AuthController } from "../Controller/AuthController.js";
import { FastifyInstance } from "fastify";

export async function AuthRoutes(fastify: FastifyInstance) {
  fastify.get("/login", AuthController.login);
}
