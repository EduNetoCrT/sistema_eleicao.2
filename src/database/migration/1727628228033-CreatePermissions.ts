import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePermissions1677621463529 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "permissions",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "descricao",
                    type: "text",
                },
                {
                    name: "ida",
                    type: "int",
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions");
    }
}
