import { DataSource } from "typeorm";
import { User } from "./models/user";


export const myDataSource = new DataSource({
    type: "mysql",
    host: "127.0.0.1",
    port: 3306,
    username: "app",
    password: "Password123!",
    database: "EluxTest",
    entities: [User],
    migrations: []
})