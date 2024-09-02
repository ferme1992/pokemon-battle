import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateBattlesTable1725298563896 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'battles',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'winnerId',
            type: 'varchar',
          },
          {
            name: 'loserId',
            type: 'varchar',
          },
          {
            name: 'turns',
            type: 'int',
          },
          {
            name: 'battleDate',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['winnerId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pokemons',
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['loserId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'pokemons',
            onDelete: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('battles');
  }
}
