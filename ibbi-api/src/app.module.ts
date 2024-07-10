import { Module } from '@nestjs/common';
import { UserController } from './modules/User/user.controller';
import { UserService } from './modules/User/user.service';
import { UserModule } from './modules/User/user.module';
import { CategoryModule } from './modules/Category/category.module';
import { ProductModule } from './modules/Product/product.module';

@Module({
  imports: [UserModule, CategoryModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
