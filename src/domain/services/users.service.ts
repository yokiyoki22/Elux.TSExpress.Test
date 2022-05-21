import { User, UserCommand } from "../entities/user";
import { IUsersRepository } from "../interfaces/repositories/users.repositoryif";
import { IUsersService } from "../interfaces/services/users.serviceif";
import { IValidator, ValidationError } from "../interfaces/validator";

export class UsersService implements IUsersService{
    private _usersRepo: IUsersRepository;
    private _usersValidator: IValidator<UserCommand>

    constructor(usersRepo: IUsersRepository, usersValidator: IValidator<UserCommand>){
        this._usersRepo = usersRepo;
        this._usersValidator = usersValidator;
    }
    async insertUser(user: UserCommand): Promise<User> {
        const validation = await this._usersValidator.validate(user);

        if(!validation.isValid){
            throw new ValidationError(validation.error as string);
        }

        return await this._usersRepo.insertUser(user);
    }
    
    async getAllUsers(): Promise<User[]> {
        return await this._usersRepo.getAllUsers();
    }
}