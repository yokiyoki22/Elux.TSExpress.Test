import { Router } from "express";
import { UsersController } from "../controllers/users.controller"

export default function UsersRoute(
    usersController: UsersController
){
    const router = Router();

    router.get('/', (req, res) => usersController.GetAll(req, res));

    router.put('/', (req, res) => usersController.Create(req, res));

    return router;
}