import { Category } from '@/models';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel(Category)
        private readonly categoryModel: typeof Category
    ){
    }
    async findAll(){
        return await this.categoryModel.findAll();
    }

    async findById(id: string) {
        return await this.categoryModel.findByPk(id);
    }

    async createCategory(createCategoryDto: CreateCategoryDto){
        return await this.categoryModel.create(createCategoryDto as any);
    }

}