import { User } from "../../domain/entities/user";
import { IUsersRepository } from "../../domain/interfaces/repositories/users.repositoryif";

export class UsersRepository implements IUsersRepository{
    async getAllUsers(): Promise<User[]> {
        return [
            {
                id: "abc123",
                fullName: "Mario Rossi",
                email: "mario.rossi@test.it"
            }
        ];
    }
}