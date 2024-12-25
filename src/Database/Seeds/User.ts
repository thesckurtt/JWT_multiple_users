import { prisma } from "../../Config/db_config";
import { Users } from "../Models/Users.js";
export async function UserSeed(turns?: number) {
  Users.createUser({
    email: "",
    name: "",
    password: "",
    isAdmin: false,
  });
}
