
export interface IValidator<T>{
    validate(item: T) : ValidationResult
}

export type ValidationResult = {
    isValid: boolean,
    error?: string
}
export class ValidationError extends Error{
    constructor(message: string){
        super(message);
        this.name = "ValidationError";
    }
}