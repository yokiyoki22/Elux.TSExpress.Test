import {Response, Request} from 'express';
import { inject, injectable } from 'tsyringe';
import { UserCommand } from '../../domain/entities/user';
import { IUsersService } from '../../domain/interfaces/services/users.serviceif';
import { ValidationError } from '../../domain/interfaces/validator';

@injectable()
export class UsersController{
    private _usersService: IUsersService;
    constructor(@inject("IUsersService") usersService: IUsersService){
        this._usersService = usersService;
    }

    async GetAll(req: Request, res: Response){
        try{
            const users = await this._usersService.getAllUsers();
            res.send(users);
        }
        catch (e) {
            res.status(500).send({
                message: "Internal Server Error: " + e
            });
        }
    }

    async Create(req: Request, res: Response){
        try{
            const user: UserCommand = req.body;
            const result = await this._usersService.insertUser(user);
            res.send(result);
        }
        catch (e) {
            if(e instanceof ValidationError){
                res.status(400).send({
                    message: e.message
                });
            } else {
                res.status(500).send({
                    message: "Internal Server Error: " + e
                });
            }
        }
    }
}