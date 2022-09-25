import * as path from 'path';
import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const env = process.env.NODE_ENV || 'dev';
const dotenv_path = path.resolve(process.cwd(), `.env`);
dotenv.config({ path: dotenv_path });

module.exports = {
    type: 'postgres',
    host: process.env.PG_HOST,
    port: +process.env.PG_PORT,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DB,
    entities: ['src/modules/**/*.entity.{ts,js}'],
    migrations: ['src/migrations/**/*.{ts,js}'],
    synchronize: false,
    cli: {
        migrationsDir: 'src/migrations',
        entitiesDir: 'src/entity'
    },
    logging: true,
};
