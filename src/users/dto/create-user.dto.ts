import { IsEmail,IsPhoneNumber,IsEnum,IsString, IsNotEmpty } from "class-validator";

export class CreateUserDto{
    
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsPhoneNumber()
    tel: string;

    @IsEnum(["INTERN","ENGINEER","ADMIN"],{
        message: 'valid role required'
    })
    role: "INTERN" | "ENGINEER" | "ADMIN";

}