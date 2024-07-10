import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateUserDTO, CreateUserReturnDTO } from './user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    
    async createUser(createUserDTO: CreateUserDTO): Promise<CreateUserReturnDTO> {
        function testEmail(email: string): boolean {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);        
        }

        async function validateUserDTO(prisma: PrismaService) {
            if(typeof createUserDTO.name !== 'string') {
                throw new BadRequestException('Invalid name provided')
            };

            if(createUserDTO.name.length < 3) {
                throw new BadRequestException('Name should be at least 3 characters long')
            };

            if(typeof createUserDTO.email !== 'string' || testEmail(createUserDTO.email) == false) {
                throw new BadRequestException('Invalid email provided')
            };
            
            if(typeof createUserDTO.password !== 'string') {
                throw new BadRequestException('Invalid password provided')
            };

            if(createUserDTO.password.length < 6) {
                throw new BadRequestException('Password must be at least 6 characters long')
            };

            const userExists = await prisma.user.findUnique({
                where: {
                    email: createUserDTO.email
                }
            })

            console.log(userExists);

            if(userExists) {
                throw new BadRequestException('User already exists');
            }
        }

        try {

            await validateUserDTO(this.prisma);

            const user = await this.prisma.user.create({
                data: {...createUserDTO, password: await bcrypt.hash(createUserDTO.password, 10)}
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
