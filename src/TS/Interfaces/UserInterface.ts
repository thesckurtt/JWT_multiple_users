export interface UserInterface {
  id?: string;
  email: string;
  name: string;
  password: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}