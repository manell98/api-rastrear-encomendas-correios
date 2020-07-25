import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class DadosRastreio1595641301752 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name: 'dadosRastreio',
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: 'local',
                        type: 'varchar'
                    },
                    {
                        name: 'status',
                        type: 'varchar'
                    },
                    {
                        name: 'data',
                        type: 'varchar'
                    },
                    {
                        name: 'origem',
                        type: 'varchar'
                    },
                    {
                        name: 'destino',
                        type: 'varchar'
                    },
                    {
                        name: 'created_At',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_At',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable('dadosRastreio');
    }

}
