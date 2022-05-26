import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryColumn("uuid")
    id!: string;

    @Column({
        length: 64
    })
    fullName!: string;

    @Column({
        length: 64
    })
    email!: string;

    @Column("timestamp")
    createdOn!: Date;
}