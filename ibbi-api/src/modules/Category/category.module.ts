import { Module } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
