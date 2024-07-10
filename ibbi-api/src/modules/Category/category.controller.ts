import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDTO } from './category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() body: CreateCategoryDTO ) {

    const response = await this.categoryService.createCategory(body);

    if(response instanceof BadRequestException) {
      throw new BadRequestException(response.message);
    }

    return response;
  }
}
