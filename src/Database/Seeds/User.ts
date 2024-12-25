import { prisma } from "../../Config/db_config";
import { Users } from "../Models/Users.js";
import { faker } from "@faker-js/faker";

export async function UserSeed(turns: number = 1) {
  for (let i = 1; i <= turns; i++) {
    try {
      const start = performance.now();
      await Users.createUser({
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: "admin",
        isAdmin: false,
      });
      const end = performance.now();
      console.log(`A operação levou ${(end - start).toFixed(2)}ms`);
    } catch (error) {
      throw new Error(`ERROR: ${error}`);
    }
  }
}
