import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO, CreateUserReturnDTO } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() body: CreateUserDTO ) {

    const response = await this.userService.createUser(body);

    if(response instanceof BadRequestException) {
      throw new BadRequestException(response.message);
    }

    return response;

  }
}
