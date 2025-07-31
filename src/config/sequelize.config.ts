import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Dialect } from 'sequelize';

export const sequelizeConfig = (
  configService: ConfigService,
): SequelizeModuleOptions => ({
  dialect: configService.get<Dialect>('DB_DIALECT') || 'postgres',
  host: configService.get<string>('DB_HOST') || 'localhost',
  port: configService.get<number>('DB_PORT') || 5432,
  username: configService.get<string>('DB_USER') || 'postgres',
  password: configService.get<string>('DB_PASSWORD') || 'postgres',
  database: configService.get<string>('DB_NAME') || 'ducdb',
});
