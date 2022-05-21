import { Router } from "express";
import { UsersController } from "../controllers/users.controller"

export default function UsersRoute(
    usersController: UsersController
){
    const router = Router();

    router.get('/', usersController.GetAll);

    return router;
}