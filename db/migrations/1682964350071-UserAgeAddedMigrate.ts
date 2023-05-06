import { MigrationInterface, QueryRunner } from "typeorm";

export class UserAgeAddedMigrate1682964350071 implements MigrationInterface {
    name = 'UserAgeAddedMigrate1682964350071'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`age\` int NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`age\``);
    }

}
