import { MigrationInterface, QueryRunner } from "typeorm";

export class FirstMigrate1682963961315 implements MigrationInterface {
    name = 'FirstMigrate1682963961315'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` ADD \`address\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`customer\` DROP COLUMN \`address\``);
    }

}
