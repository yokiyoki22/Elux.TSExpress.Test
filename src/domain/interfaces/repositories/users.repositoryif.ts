import { User, UserCommand } from "../../entities/user";

export interface IUsersRepository{
    getAllUsers() : Promise<User[]>;
    insertUser(user: UserCommand) : Promise<User>;
    getUserByEmail(email: string) : Promise<User | undefined>;
}