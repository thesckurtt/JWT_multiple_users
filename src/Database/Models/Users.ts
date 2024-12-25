import { prisma } from "../../Config/db_config.js";
import { UserInterface } from "../../TS/Interfaces/UserInterface.js";
import argon2 from "argon2";

export class Users {
  public static async createUser(data: UserInterface) {

    const hashPassword : string = await argon2.hash(data.password);

    prisma.user.create({
      data: {
        id: data.id,
        email: data.email,
        password: hashPassword,
        isAdmin: data.isAdmin,
      },
    });
  }
  public static async isValidUser(email: string, password: string) {}
}
