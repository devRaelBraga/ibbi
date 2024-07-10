import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async createProduct(@Body() body: CreateProductDTO ) {

    const response = await this.productService.createProduct(body);

    if(response instanceof BadRequestException) {
      throw new BadRequestException(response);
    }

    return response;
  }

  @Get()
  async getAllProducts() {

    const response = await this.productService.getAll();

    return response;
  }
}
