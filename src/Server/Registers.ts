import { FastifyInstance } from "fastify";
import fastifyJwt from "@fastify/jwt";
import { env_JWT_GLOBAL_SECRET_KEY } from "../Config/env_config.js";
import { AdminMiddleware } from "../Middlewares/AdminMiddleware.js";
import { UserMiddleware } from "../Middlewares/UserMiddleware.js";

export async function Registers(fastify: FastifyInstance) {
  fastify.register(fastifyJwt, {
    secret: env_JWT_GLOBAL_SECRET_KEY ?? "djs89dfsua8hr8qdn8aowehf9",
  });

  fastify.decorate("AdminAuthenticate", AdminMiddleware);

  // fastify.decorate("AdminMiddleware", AdminMiddleware);

  fastify.decorate("UserAuthenticate", UserMiddleware)
}
