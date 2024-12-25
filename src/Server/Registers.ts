import { app } from "server.js";
import jwtPlugin from "@fastify/jwt";
import { env_JWT_GLOBAL_SECRET_KEY, env_JWT_USERS_SECRET_KEY, env_JWT_ADMINS_SECRET_KEY} from "../Config/env_config.js";

/**
 * ### JWT Secret Keys for use in middlewares
 */
const JWT_SECRET_KEYS = [env_JWT_GLOBAL_SECRET_KEY, env_JWT_USERS_SECRET_KEY, env_JWT_ADMINS_SECRET_KEY];

app.register(jwtPlugin, {
  secret: JWT_SECRET_KEYS[0]
});
