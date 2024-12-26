import { app } from "../server.js";
import { FastifyInstance } from "fastify";
import fastifyJwt  from "@fastify/jwt";
import { env_JWT_GLOBAL_SECRET_KEY, env_JWT_USERS_SECRET_KEY, env_JWT_ADMINS_SECRET_KEY} from "../Config/env_config.js";

export async function Registers(fastify: FastifyInstance) {
  // console.log(env_PREFIX_AUTH_ROUTES);
  fastify.register(fastifyJwt,{
    secret: env_JWT_GLOBAL_SECRET_KEY ?? "djs89dfsua8hr8qdn8aowehf9"
  }); 
}
