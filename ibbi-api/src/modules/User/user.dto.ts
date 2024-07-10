
export class CreateUserDTO {
    name: string;
    email: string;
    password: string;
}

export class CreateUserReturnDTO {
    name: string;
    email: string;
    message: string;
}