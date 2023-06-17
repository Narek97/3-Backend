import { registerAs } from '@nestjs/config';
import * as process from 'process';

export const sqlConfig = registerAs('database', () => ({
  dialect: process.env.DIALECT || 'mysql',
  logging: process.env.LOGGING === 'true',
  host: process.env.MYSQL_HOST,
  port: +process.env.MYSQL_PORT,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  autoLoadModels: true,
  synchronize: false,
}));
