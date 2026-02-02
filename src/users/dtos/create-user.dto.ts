import { Type } from "class-transformer";
import { IsEmail, IsInt, IsNotEmpty, IsString, Max, Min, IsAlpha, MinLength, MaxLength, IsOptional, Matches } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    @MinLength(2)
    @MaxLength(20)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    @MinLength(2)
    @MaxLength(20)
    lastName: string;

    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(120)
    age: number;

    @IsOptional()
    @IsString()
    @Matches(/^[a-zA-Z ]+$/)
    city?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}