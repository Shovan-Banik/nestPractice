import { IsEmail, IsString, IsStrongPassword, IsEnum, IsNotEmpty } from "class-validator";
export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @IsNotEmpty()
    password: string;

    @IsEnum(['Admin' , 'Engineer' , 'Noob'], {
        message: 'Valid Role Required'
    })
    role: 'Admin' | 'Engineer' | 'Noob';
}