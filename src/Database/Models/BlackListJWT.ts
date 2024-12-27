import { prisma } from "../../Config/db_config.js";
import argon2 from "argon2";

export class BlackListJWT {
  public static async create(token: string) {
    try {
      const result = await prisma.blackListJWT.create({
        data: {
          token: token,
        },
      });
      return true;
    } catch (error) {
      return false;
    }
  }
  public static async isInBlackList(token: string) {
    try {
      const result = await prisma.blackListJWT.findUnique({
        where: {
          token: token,
        },
      });
      if (result) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}
