import { Injectable } from '@nestjs/common';
import {
  SequelizeModuleOptions,
  SequelizeOptionsFactory,
} from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SequelizeConfigService implements SequelizeOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createSequelizeOptions():
    | Promise<SequelizeModuleOptions>
    | SequelizeModuleOptions {
    const {
      sql: {
        dialect,
        logging,
        host,
        port,
        username,
        password,
        database,
        autoLoadModels,
        synchronize,
      },
    } = this.configService.get('database');

    return {
      dialect,
      logging,
      host,
      port,
      username,
      password,
      database,
      autoLoadModels,
      synchronize,
      models: [],
      define: {
        charset: 'utf8',
        collate: 'utf8_general_ci',
      },
    };
  }
}
