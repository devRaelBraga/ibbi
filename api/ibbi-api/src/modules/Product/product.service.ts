import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../Prisma/prisma.service';
import { CreateProductDTO, CreateProductReturnDTO } from './product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) {}

    
    async createProduct(createProductDTO: CreateProductDTO): Promise<CreateProductReturnDTO> {
        try {
            function categoryExists(categoryId: number): boolean {
                return true;
            }

            function validateProductDTO() {
                if(typeof createProductDTO.name !== 'string') {
                    throw new BadRequestException('Invalid name provided')
                };
    
                if(createProductDTO.name.length < 3) {
                    throw new BadRequestException('Name should be at least 3 characters long')
                };
    
                if(typeof createProductDTO.description !== 'string') {
                    throw new BadRequestException('Invalid description provided')
                };
    
                if(createProductDTO.description.length < 6) {
                    throw new BadRequestException('Description must be at least 8 characters long')
                };

                if(typeof createProductDTO.value !== 'number') {
                    throw new BadRequestException('Invalid value provided')
                };
    
                if(createProductDTO.value <= 0) {
                    throw new BadRequestException('Value must be greater than zero')
                };
                
                if(!categoryExists(createProductDTO.category_id)) {
                    throw new BadRequestException('Invalid category provided')
                }
                
                if(typeof createProductDTO.qtt != 'number' || createProductDTO.qtt <= 0 ) {
                    throw new BadRequestException('Invalid quantity provided')
                }
            }

            validateProductDTO()

            const product = await this.prisma.product.create({
                data: createProductDTO
            });

            if(!product) {
                throw new InternalServerErrorException("Could not create product")
            }

            return product;

        } catch (error) {
            console.error(error);
            return error;
        };

    };

};
