import { FastifyInstance } from "fastify";
import { AuthRoutes } from "./AuthRoutes.js";
import { AdminRoutes } from "./AdminRoutes.js"
import { env_PREFIX_AUTH_ROUTES, env_PREFIX_ADMIN_ROUTES } from "../Config/env_config.js";
export async function RegisterRoute(fastify: FastifyInstance) {
  console.log(env_PREFIX_AUTH_ROUTES);
  fastify.register(AuthRoutes, {prefix: env_PREFIX_AUTH_ROUTES}); // Registers AuthRoutes
  fastify.register(AdminRoutes, {prefix: env_PREFIX_ADMIN_ROUTES })
}
