import { BlackListJWT } from "../Database/Models/BlackListJWT.js";
import { FastifyRequest, FastifyReply } from "fastify";

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

  }catch(error){
    reply.code(401).send({ error: "Unauthorized" });
  }
}
