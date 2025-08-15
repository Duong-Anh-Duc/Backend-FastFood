import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async getAllCategories() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async getCategoryById(@Param('id') id: string) {
    return await this.categoryService.findById(id);
  }

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
      return await this.categoryService.createCategory(createCategoryDto);
  }

}
