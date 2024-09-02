import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pokemon } from '../pokemons/pokemon.entity';
import { Battle } from './battle.entity';

@Injectable()
export class BattleService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>,
    @InjectRepository(Battle)
    private readonly battleRepository: Repository<Battle>,
  ) {}

  async fight(pokemonId1: string, pokemonId2: string): Promise<Pokemon> {
    const pokemon1 = await this.pokemonRepository.findOneBy({ id: pokemonId1 });
    const pokemon2 = await this.pokemonRepository.findOneBy({ id: pokemonId2 });

    if (!pokemon1 || !pokemon2) {
      throw new NotFoundException('One or both Pokemon not found');
    }

    const [firstAttacker, secondAttacker] = this.determineOrder(
      pokemon1,
      pokemon2,
    );

    let turns = 0;

    while (true) {
      turns++;
      this.attack(firstAttacker, secondAttacker);
      if (secondAttacker.hp <= 0) {
        await this.recordBattle(firstAttacker, secondAttacker, turns);
        return firstAttacker;
      }

      this.attack(secondAttacker, firstAttacker);
      if (firstAttacker.hp <= 0) {
        await this.recordBattle(secondAttacker, firstAttacker, turns);
        return secondAttacker;
      }
    }
  }

  private determineOrder(
    pokemon1: Pokemon,
    pokemon2: Pokemon,
  ): [Pokemon, Pokemon] {
    if (
      pokemon1.speed > pokemon2.speed ||
      (pokemon1.speed === pokemon2.speed && pokemon1.attack > pokemon2.attack)
    ) {
      return [pokemon1, pokemon2];
    } else {
      return [pokemon2, pokemon1];
    }
  }

  private attack(attacker: Pokemon, defender: Pokemon): void {
    const damage = Math.max(1, attacker.attack - defender.defense);
    defender.hp -= damage;
  }

  private async recordBattle(
    winner: Pokemon,
    loser: Pokemon,
    turns: number,
  ): Promise<void> {
    const battle = this.battleRepository.create({
      winner,
      loser,
      turns,
    });
    await this.battleRepository.save(battle);
  }
}
