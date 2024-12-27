import dotenv from "dotenv";
dotenv.config();

export const env_JWT_GLOBAL_SECRET_KEY : string  = process.env.JWT_GLOBAL_SECRET_KEY ?? "";
export const env_JWT_USERS_SECRET_KEY : string  = process.env.JWT_USERS_SECRET_KEY ?? "";
export const env_JWT_ADMINS_SECRET_KEY : string  = process.env.JWT_ADMINS_SECRET_KEY ?? "";
export const env_JWT_EXPIRATION_TIME : string  = process.env.JWT_EXPIRATION_TIME ?? "";
export const env_PREFIX_AUTH_ROUTES : string  = process.env.PREFIX_AUTH_ROUTES ?? "";
export const env_SALT_PASSWORD : string = process.env.SALT_PASSWORD ?? "";
export const env_PREFIX_ADMIN_ROUTES : string = process.env.PREFIX_ADMIN_ROUTES ?? "";
export const env_PREFIX_USER_ROUTES : string = process.env.PREFIX_USER_ROUTES ?? "";
