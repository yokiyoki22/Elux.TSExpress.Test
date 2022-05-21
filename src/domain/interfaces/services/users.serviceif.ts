import { User, UserCommand } from "../../entities/user";

export interface IUsersService{
    getAllUsers() : Promise<User[]>;
    insertUser(user: UserCommand) : Promise<User>;
}