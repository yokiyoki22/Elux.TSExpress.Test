import { User } from "../entities/user";
import { IUsersRepository } from "../interfaces/repositories/users.repositoryif";
import { IUsersService } from "../interfaces/services/users.serviceif";

export class UsersService implements IUsersService{
    private _usersRepo: IUsersRepository;

    constructor(usersRepo: IUsersRepository){
        this._usersRepo = usersRepo;
    }
    
    async getAllUsers(): Promise<User[]> {
        return await this._usersRepo.getAllUsers();
    }
}