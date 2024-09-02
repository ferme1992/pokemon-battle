import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'sqlite',
  database: 'database.sqlite',
  entities: [__dirname + '/src/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/**/*{.ts,.js}'],
  synchronize: false,
  logging: true,
});
