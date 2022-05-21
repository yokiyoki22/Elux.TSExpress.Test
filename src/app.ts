
import express, { application } from 'express';
import { LoadConfig, Config } from './domain/services/config.service';
import UsersRoute from './web/routes/users.route';
import { UsersController } from './web/controllers/users.controller';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { UsersService } from './domain/services/users.service';
import { UserValidator } from './domain/validators/users.validator';

const app = express();

app.use(express.json());

const config: Config = LoadConfig();


const usersRepository = new UsersRepository();
const userValidator = new UserValidator(usersRepository);
const usersService = new UsersService(usersRepository, userValidator);
const usersController = new UsersController(usersService);


app.use("/users", UsersRoute(usersController));

app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});



