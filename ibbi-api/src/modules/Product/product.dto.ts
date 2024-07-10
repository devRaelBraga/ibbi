

export class CreateProductDTO {
    name: string;
    description: string;
    value: number;
    category_id: number;
    qtt: number;
    imageURL: string;
}

export class CreateProductReturnDTO {
    name: string;
    description: string;
    value: number;
    category_id: number;
    qtt: number;
}