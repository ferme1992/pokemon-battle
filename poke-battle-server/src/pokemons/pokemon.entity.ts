import { COLUMN_TYPE_INTEGER, ENTITY_NAME } from "src/constants/pokemon";
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity(ENTITY_NAME)
export class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column(COLUMN_TYPE_INTEGER)
  attack: number;

  @Column(COLUMN_TYPE_INTEGER)
  defense: number;

  @Column(COLUMN_TYPE_INTEGER)
  hp: number;

  @Column(COLUMN_TYPE_INTEGER)
  speed: number;

  @Column()
  type: string;

  @Column()
  imageUrl: string;
}