import { UserCommand } from "../entities/user";
import { IValidator, ValidationError, ValidationResult } from "../interfaces/validator";



export class UserValidator implements IValidator<UserCommand>{
    validate(item: UserCommand): ValidationResult {
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