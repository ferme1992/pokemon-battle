import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pokemon } from '../pokemons/pokemon.entity';
import { COLUMN_TYPE_DATETIME, COLUMN_TYPE_INT, DEFAULT_TIMESTAMP, ENTITY_NAME, UUID_GENERATION } from "src/constants/battles";

@Entity(ENTITY_NAME)
export class Battle {
  @PrimaryGeneratedColumn(UUID_GENERATION)
  id: string;

  @ManyToOne(() => Pokemon)
  winner: Pokemon;

  @ManyToOne(() => Pokemon)
  loser: Pokemon;

  @Column({ type: COLUMN_TYPE_INT })
  turns: number;

  @Column({ type: COLUMN_TYPE_DATETIME, default: () => DEFAULT_TIMESTAMP })
  battleDate: string;
}
