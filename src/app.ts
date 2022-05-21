
import express, { application } from 'express';
import usersRouter from "./web/routes/users.route"
import { LoadConfig, Config } from './domain/services/config.service';
import UsersRoute from './web/routes/users.route';
import { UsersController } from './web/controllers/users.controller';
import { UsersRepository } from './infrastructure/repositories/users.repository';
import { UsersService } from './domain/services/users.service';

const app = express();

const config: Config = LoadConfig();


const usersRepository = new UsersRepository();
const usersService = new UsersService(usersRepository);
const usersController = new UsersController(usersService);


app.use("/users", UsersRoute(usersController));

app.listen(config.port, () => {
    console.log("Listening on port " + config.port);
});



