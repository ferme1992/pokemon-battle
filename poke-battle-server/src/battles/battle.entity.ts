import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Pokemon } from '../pokemons/pokemon.entity';

@Entity('battles')
export class Battle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Pokemon)
  winner: Pokemon;

  @ManyToOne(() => Pokemon)
  loser: Pokemon;

  @Column({ type: 'int' })
  turns: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  battleDate: string;
}