import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column('integer')
  attack: number;

  @Column('integer')
  defense: number;

  @Column('integer')
  hp: number;

  @Column('integer')
  speed: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;
}