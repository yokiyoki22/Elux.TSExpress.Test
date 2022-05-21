import { User } from "../../entities/user";

export interface IUsersService{
    getAllUsers() : Promise<User[]>;
}