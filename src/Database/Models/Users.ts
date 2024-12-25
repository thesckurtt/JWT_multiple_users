import { prisma } from "../../Config/db_config.js";
import { UserInterface } from "../../TS/Interfaces/UserInterface.js";
import argon2 from "argon2";

export class Users {
  public static async createUser(data: UserInterface) {
    const hashPassword: string = await argon2.hash(data.password);
    try {
      const result = await prisma.users.create({
        data: {
          name: data.name,
          email: data.email,
          password: hashPassword,
          isAdmin: data.isAdmin,
        },
      });
      console.info(result);
    } catch (error) {
      throw new Error(`Error: ${error}`)
    }
  }
  public static async isValidUser(email: string, password: string) {}
}
