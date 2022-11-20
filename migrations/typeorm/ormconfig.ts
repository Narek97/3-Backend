// import * as path from 'path';
// import * as dotenv from 'dotenv';
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
//
// // const env = process.env.NODE_ENV || 'dev';
// const dotenv_path = path.resolve(process.cwd(), `.env.development`);
// dotenv.config({ path: dotenv_path });
//
// module.exports = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'root',
//   database: 'my-app',
//   synchronize: false,
//   entities: ['src/modules/**/*.entity.{ts,js}'],
//   migrations: ['src/migrations/**/*.{ts,js}'],
//   cli: {
//     migrationsDir: 'src/migrations',
//     entitiesDir: 'src/entity',
//   },
//   logging: true,
// };

const dbConfig = {
  synchronize: false,
  entities: ['src/modules/**/*.entity.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/entity',
  },
  logging: true,
};

switch (process.env.NODE_ENV) {
  case 'development':
    Object.assign(dbConfig, {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'my-app',
    });
    break;
  case 'production':
    Object.assign({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      migrationsRun: true,
      ssl: {
        rejectUnauthorized: false,
      },
    });
    break;
  default:
    throw new Error('error');
}

export default dbConfig;
