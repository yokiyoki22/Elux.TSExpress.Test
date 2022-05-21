import { getuid } from "process";
import { User, UserCommand } from "../../domain/entities/user";
import { IUsersRepository } from "../../domain/interfaces/repositories/users.repositoryif";
import * as crypto from 'crypto';
export class UsersRepository implements IUsersRepository{
    private _users: Array<User>;
    constructor(){
        this._users = new Array<User>();
        this._users.push({
            id: "abc123",
            fullName: "Mario Rossi",
            email: "mario.rossi@test.it"
        });
    }
    async getUserByEmail(email: string): Promise<User | undefined> {
        const found = this._users.filter(x => x.email == email);

        if(found.length > 1) throw new Error("Found more than one user with the same email.");

        if(found.length === 0) return undefined;

        return found[0];
    }
    async insertUser(user: UserCommand): Promise<User> {
        const newUser: User = {
            fullName: user.fullName,
            email: user.email,
            id: crypto.randomUUID()
        };

        this._users.push(newUser);

        return newUser;
    }
    async getAllUsers(): Promise<User[]> {
        return this._users;
    }
}