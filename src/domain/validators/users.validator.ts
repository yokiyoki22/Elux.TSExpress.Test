import { UserCommand } from "../entities/user";
import { IUsersRepository } from "../interfaces/repositories/users.repositoryif";
import { IValidator, ValidationError, ValidationResult } from "../interfaces/validator";



export class UserValidator implements IValidator<UserCommand>{
    private _repo: IUsersRepository;

    constructor(usersRepo: IUsersRepository){
        this._repo = usersRepo;
    }

    async validate(item: UserCommand): Promise<ValidationResult> {
        const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        const errors = new Array<string>();

        if(item.fullName === undefined){
            errors.push('Missing fullName.');
        }
        if(item.email === undefined){
            errors.push('Missing email.');
        }
        if(item.email !== undefined && !emailRegexp.test(item.email)){
            errors.push('Invalid email format.');
        }
        if((await this._repo.getUserByEmail(item.email)) !== undefined){
            errors.push('Email already in use.');
        }
        
        if(errors.length == 0){
            return {
                isValid: true
            };
        }
        else{
            return {
                isValid: false,
                error: errors.reduce((prev, curr) => prev + " " + curr)
            }
        }
    }
}