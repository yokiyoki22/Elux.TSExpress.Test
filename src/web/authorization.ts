import { NextFunction, Response, Request } from "express";
import { ApiKey } from "../domain/services/config.service";

export function authorize(req: Request, res: Response, next: NextFunction){
    if(!req.headers.authorization){
        res.status(401).send("authorization header is missing.");
    }
    else if(req.headers.authorization !== ApiKey){
        res.status(403).send("authorization header is invalid.");
    }
    else{
        next();
    }
}