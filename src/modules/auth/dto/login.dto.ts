import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail() // É do tipo email
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8) // No mínimo1 8 caracteres
  senha: string;
}
