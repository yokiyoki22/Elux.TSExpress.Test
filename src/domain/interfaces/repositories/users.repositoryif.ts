import { User } from "../../entities/user";

export interface IUsersRepository{
    getAllUsers() : Promise<User[]>;
}