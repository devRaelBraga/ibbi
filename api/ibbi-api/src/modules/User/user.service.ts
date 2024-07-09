import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateUserDTO, CreateUserReturnDTO } from './user.dto';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    testEmail(email: string): boolean {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);        
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<CreateUserReturnDTO> {
        try {
            function validateUserDTO() {
                if(typeof createUserDTO.name !== 'string') {
                    throw new BadRequestException('Invalid name provided')
                };
    
                if(createUserDTO.name.length < 3) {
                    throw new BadRequestException('Name should be at least 3 characters long')
                };
    
                if(typeof createUserDTO.email !== 'string' || this.testEmail(createUserDTO.email) == false) {
                    throw new BadRequestException('Invalid email provided')
                };
                
                if(typeof createUserDTO.password !== 'string') {
                    throw new BadRequestException('Invalid password provided')
                };
    
                if(createUserDTO.password.length < 6) {
                    throw new BadRequestException('Password must be at least 6 characters long')
                };
            }

            validateUserDTO()

            const user = await this.prisma.user.create({
                data: createUserDTO
            });

            if(!user) {
                throw new InternalServerErrorException("Could not create user")
            }

            return {
                name: user.name,
                email: user.email,
                message: 'Success'
            };

        } catch (error) {
            console.error(error);
            return error;
        };

    };

};
