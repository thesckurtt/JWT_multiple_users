import { FastifyInstance } from "fastify";
import { AuthRoutes } from "./AuthRoutes.js";
import { env_PREFIX_AUTH_ROUTES } from "../Config/env_config.js";

export async function RegisterRoute(fastify: FastifyInstance) {
  console.log(env_PREFIX_AUTH_ROUTES);
  fastify.register(AuthRoutes, {prefix: env_PREFIX_AUTH_ROUTES}); // Registers AuthRoutes
}
