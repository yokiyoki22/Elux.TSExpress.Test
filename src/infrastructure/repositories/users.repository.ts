import { User, UserCommand } from "../../domain/entities/user";
import { IUsersRepository } from "../../domain/interfaces/repositories/users.repositoryif";
import * as crypto from 'crypto';
import { User as UserModel } from "../models/user";
import { PrismaClient } from '@prisma/client'

export class UsersRepository implements IUsersRepository{
    private _client: PrismaClient;
    constructor(){
        this._client = new PrismaClient();
    }

    async getUserByEmail(email: string): Promise<User | null> {
        return this._client.user.findUnique({where: {email}});
    }

    async insertUser(user: UserCommand): Promise<User> {
        const newUser: UserModel = {
            id: crypto.randomUUID(),
            fullName: user.fullName,
            email: user.email,
            createdOn: new Date()
        };

        const inserted = await this._client.user.create({data: newUser});

        return {
            id: inserted.id,
            email: inserted.email,
            fullName: inserted.fullName
        };
    }
    
    async getAllUsers(): Promise<User[]> {
        return this._client.user.findMany({select: {id: true, email: true, fullName: true}})
    }
}