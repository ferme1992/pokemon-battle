import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonsModule } from './pokemons/pokemons.module';
import { BattlesModule } from './battles/battles.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
      migrationsRun: true, // This will run migrations on every app launch
      synchronize: false, // Set to false for production and when using migrations
    }),
    PokemonsModule,
    BattlesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}