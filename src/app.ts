import "reflect-metadata";
import express, { application } from 'express';
import { LoadConfig, Config } from './domain/services/config.service';
import UsersRoute from './web/routes/users.route';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { UsersController } from './web/controllers/users.controller';
import { UsersService } from './domain/services/users.service';
import { UserValidator } from './domain/validators/users.validator';
import { container } from 'tsyringe';

const app = express();

app.use(express.json());

const config: Config = LoadConfig();

container.register("IUsersRepository", {
    useClass: UsersRepository
});
container.register("IUsersService", {
    useClass: UsersService
});
container.register("IValidator<UserCommand>", {
    useClass: UserValidator
});

const usersController = container.resolve(UsersController);

app.use("/users", UsersRoute(usersController));

app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});



