import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) {}

    async createCategory(createCategoryDTO: CreateCategoryDTO): Promise<CreateCategoryReturnDTO> {
        try {

            function validateCategoryDTO() {
                if(typeof createCategoryDTO.name !== 'string') {
                    throw new BadRequestException('Invalid name provided')
                };
    
                if(createCategoryDTO.name.length < 3) {
                    throw new BadRequestException('Name should be at least 3 characters long')
                };
    
                if(typeof createCategoryDTO.description !== 'string') {
                    throw new BadRequestException('Invalid description provided')
                };
    
                if(createCategoryDTO.description.length < 6) {
                    throw new BadRequestException('Description must be at least 8 characters long')
                };
            }

            validateCategoryDTO()

            const category = await this.prisma.category.create({
                data: createCategoryDTO
            });

            if(!category) {
                throw new InternalServerErrorException("Could not create category")
            }

            return {
                name: category.name,
                description: category.description
            };

        } catch (error) {
            console.error(error);
            return error;
        };

    };

};
