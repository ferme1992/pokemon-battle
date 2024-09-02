import { Controller, Get, Query } from '@nestjs/common';
import { BattleService } from './battles.service';
import { Pokemon } from '../pokemons/pokemon.entity';
import { CONTROLLER_ROUTE, QUERY_PARAM_POKEMON1, QUERY_PARAM_POKEMON2 } from "src/constants/battles";

@Controller(CONTROLLER_ROUTE)
export class BattleController {
  constructor(private readonly battleService: BattleService) {}

  @Get()
  async startBattle(
    @Query(QUERY_PARAM_POKEMON1) pokemon1Id: string,
    @Query(QUERY_PARAM_POKEMON2) pokemon2Id: string,
  ): Promise<Pokemon> {
    return this.battleService.fight(pokemon1Id, pokemon2Id);
  }
}
