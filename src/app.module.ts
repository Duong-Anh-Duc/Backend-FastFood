import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { sequelizeConfig } from './config/sequelize.config';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      useFactory: (configService: ConfigService): SequelizeModuleOptions =>
        sequelizeConfig(configService),
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
