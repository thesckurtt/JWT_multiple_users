import {fastify} from "fastify";
import { RegisterRoute } from "./Routes/Routes.js";
import { Registers } from "./Server/Registers.js";

export const app = fastify({ logger: false });

Registers(app);
RegisterRoute(app);

app.listen(
  {
    host: "0.0.0.0",
    port: 3333,
  },
  (err: unknown, address: string) => {
    if (err) {
      console.error("├ ERROR ──────── \n");
      throw new Error(`${err} \n`);
    }
    console.log(`\nServer listening at: ${address} \n`);
  }
);
