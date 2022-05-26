import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUsers1653475981011 implements MigrationInterface {
    name = 'AddUsers1653475981011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` varchar(255) NOT NULL, \`fullName\` varchar(64) NOT NULL, \`email\` varchar(64) NOT NULL, \`createdOn\` timestamp NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
