import fastify from "fastify";
export const app = fastify({logger: true});

app.listen({
  host: "0.0.0.0",
  port: 3333
}, (err, address)=>{
  console.log(`\nServer listening at: ${address} \n`)
})