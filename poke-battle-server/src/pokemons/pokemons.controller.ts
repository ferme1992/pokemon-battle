import { Controller, Get } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { Pokemon } from './pokemon.entity';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Get()
  async findAll(): Promise<Pokemon[]> {
    return this.pokemonsService.findAll();
  }
}
