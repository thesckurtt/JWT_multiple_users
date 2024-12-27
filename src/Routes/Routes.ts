import { FastifyInstance } from "fastify";
import { AuthRoutes } from "./AuthRoutes.js";
import { AdminRoutes } from "./AdminRoutes.js"
import { env_PREFIX_AUTH_ROUTES, env_PREFIX_ADMIN_ROUTES,env_PREFIX_USER_ROUTES } from "../Config/env_config.js";
import { userRoutes } from "./UserRoutes.js";

export async function RegisterRoute(fastify: FastifyInstance) {
  console.log(env_PREFIX_AUTH_ROUTES);
  fastify.register(AuthRoutes, {prefix: env_PREFIX_AUTH_ROUTES}); // Registers AuthRoutes
  fastify.register(AdminRoutes, {prefix: env_PREFIX_ADMIN_ROUTES });
  fastify.register(userRoutes, {prefix: env_PREFIX_USER_ROUTES})
}
