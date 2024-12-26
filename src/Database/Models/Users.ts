import { prisma } from "../../Config/db_config.js";
import { UserInterface } from "../../TS/Interfaces/UserInterface.js";
import { env_SALT_PASSWORD} from "../../Config/env_config.js"
import Joi from "joi";
import { AuthControllerLoginSchema } from "../../Controller/AuthController/Schemas/AuthControllerLoginSchema.js";
import { Authenticator } from "../../Utils/Authenticator.js";
import argon2 from "argon2";

export class Users {
  public static async createUser(data: UserInterface) {

    const passwordWithSalt: string = data.password + env_SALT_PASSWORD;
    const hashPassword: string = await argon2.hash(passwordWithSalt);
    
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
      throw new Error(`Error: ${error}`);
    }
  }

  public static async isValidUser(email: string, password: string): Promise<boolean> {
    const data = {
      email,
      password,
    };

    const { error, value } = Authenticator.validateAny(
      AuthControllerLoginSchema,
      data
    );

    if (error) {
      return false;
    }

    const user = await Users.getUser(value.email);

    if (!user) {
      return false;
    }

    const passwordWithSalt: string = value.password + env_SALT_PASSWORD;

    const isValidPassword: boolean = await argon2.verify(
      user.password,
      passwordWithSalt
    );
    if (user && isValidPassword) {
      return true;
    }
    return false;
  }
  public static async getUser(param: string): Promise<UserInterface | null> {
    const result = await prisma.users.findFirst({
      where: {
        OR: [
          { email: typeof param === "string" ? param : undefined },
          { id: typeof param === "string" ? param : undefined },
        ],
      },
    });
    return result;
  }
}
