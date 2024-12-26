import { AuthController } from "../Controller/AuthController/AuthController.js";
import { FastifyInstance } from "fastify";

export async function AuthRoutes(fastify: FastifyInstance) {
  fastify.post("/login", AuthController.login);
}
