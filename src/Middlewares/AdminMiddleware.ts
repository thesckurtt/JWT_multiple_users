import { error } from "console";
import { FastifyRequest, FastifyReply } from "fastify";

export async function AdminMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try{
    // { isAdmin: false, iat: 1735259201, exp: 1735262801 }
    const jwt : {isAdmin?: boolean, iat?: number|string, exp?: number|string} = await request.jwtVerify();

    if(!jwt.isAdmin){
      throw new Error();
    }
    // console.log(jwt.isAdmin)
  }catch(error){
    reply.code(401).send({ error: "Unauthorized" });
  }
}
