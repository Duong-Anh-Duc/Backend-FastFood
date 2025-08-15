import { Category } from '@/models';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports : [SequelizeModule.forFeature([Category])],
  controllers: [CategoryController],
  providers: [CategoryService],

})
export class CategoryModule {}
