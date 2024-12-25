import fastify from "fastify";

const app = fastify({logger: true});

app.get("/", ()=>{
  return "Hello world"
})

app.listen({
  host: "0.0.0.0",
  port: 3333
}, (err, address)=>{
  console.log(`\nServer listening at: ${address} \n`)
})