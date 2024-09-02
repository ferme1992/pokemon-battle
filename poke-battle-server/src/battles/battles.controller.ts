import { Controller, Get, Query } from '@nestjs/common';
import { BattleService } from './battles.service';
import { Pokemon } from '../pokemons/pokemon.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get()
  async startBattle(
    @Query('pokemon1') pokemon1: string,
    @Query('pokemon2') pokemon2: string,
  ): Promise<Pokemon> {
    return this.battleService.fight(pokemon1, pokemon2);
  }
}
