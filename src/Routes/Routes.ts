import { FastifyInstance } from "fastify";
import { AuthRoutes } from "./AuthRoutes.js";

export async function RegisterRoute(fastify: FastifyInstance) {
  fastify.register(AuthRoutes); // Registers AuthRoutes
}
