import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BattleService } from './battles.service';
import { BattleController } from './battles.controller';
import { Pokemon } from '../pokemons/pokemon.entity';
import { Battle } from './battle.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, Battle])],
  providers: [BattleService],
  controllers: [BattleController],
})
export class BattlesModule {}
