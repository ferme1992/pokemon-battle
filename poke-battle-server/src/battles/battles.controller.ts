import { Controller, Get, Query } from '@nestjs/common';
import { BattleService } from './battles.service';
import { Pokemon } from '../pokemons/pokemon.entity';

@Controller('battle')
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get()
  async startBattle(
    @Query('pokemon1Id') pokemon1Id: string,
    @Query('pokemon2Id') pokemon2Id: string,
  ): Promise<Pokemon> {
    return this.battleService.fight(pokemon1Id, pokemon2Id);
  }
}
