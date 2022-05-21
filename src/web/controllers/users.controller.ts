import {Response, Request} from 'express';
import { IUsersService } from '../../domain/interfaces/services/users.serviceif';

export class UsersController{
    private _usersService: IUsersService;
    constructor(usersService: IUsersService){
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
}