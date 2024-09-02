import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreatePokemonTable1725292128683 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pokemon',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'attack',
            type: 'integer',
          },
          {
            name: 'defense',
            type: 'integer',
          },
          {
            name: 'hp',
            type: 'integer',
          },
          {
            name: 'speed',
            type: 'integer',
          },
          {
            name: 'type',
            type: 'varchar',
          },
          {
            name: 'imageUrl',
            type: 'varchar',
          },
        ],
      }),
      true,
    );

    await queryRunner.query(`
            INSERT INTO pokemon (id, name, attack, defense, hp, speed, type, imageUrl)
            VALUES 
            ('pokemon-1', 'Pikachu', 4, 3, 3, 6, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'),
            ('pokemon-2', 'Charmander', 4, 3, 3, 4, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png'),
            ('pokemon-3', 'Squirtle', 3, 4, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png'),
            ('pokemon-4', 'Bulbasur', 4, 3, 3, 3, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png'),
            ('pokemon-5', 'Eevee', 4, 3, 4, 5, 'Type', 'https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/133.png')
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pokemon');
  }
}
