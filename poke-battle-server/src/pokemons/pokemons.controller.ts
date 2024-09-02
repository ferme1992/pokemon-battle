import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './pokemon.entity';
import { CONTROLLER_ROUTE } from "src/constants/pokemon";

@Controller(CONTROLLER_ROUTE)
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonsService.findAll();
  }
}
