import { prisma } from "../Config/db_config.js"
import { error } from "console";
import { BlackListJWT } from "../Database/Models/BlackListJWT.js";
import { FastifyRequest, FastifyReply } from "fastify";
import { object } from "joi/lib/index.js";

export async function AdminMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try{
    const jwt : {isAdmin?: boolean, iat?: number|string, exp?: number|string} = await request.jwtVerify();

    const isBlockedJwt = await BlackListJWT.isInBlackList((request.headers.authorization)?.replace("Bearer ","") ?? "");

    if(!jwt.isAdmin || isBlockedJwt){
      throw new Error();
    }

    // console.log(jwt)
  }catch(error){
    reply.code(401).send({ error: "Unauthorized" });
  }
}
