import { IsString, IsBoolean, IsOptional, IsDateString, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsDateString()
  @IsNotEmpty()
  dateJoined: string;

  @IsString()
  @IsNotEmpty()
  nomePrimeiro: string;

  @IsString()
  @IsNotEmpty()
  nomeUltimo: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  senha: string;

  @IsString()
  @IsNotEmpty()
  telefone: string;

  @IsOptional()
  @IsBoolean()
  ativo: boolean;

  // Opcional ou apagar
  @IsOptional()
  @IsString()
  pessoa: string;

  @IsDateString()
  @IsNotEmpty()
  ultimaConexao: string;
}

export class UpdateUserDTO {
  @IsOptional()
  @IsDateString()
  dateJoined: string;

  @IsOptional()
  @IsString()
  nomePrimeiro: string;

  @IsOptional()
  @IsString()
  nomeUltimo: string;

  @IsOptional()
  @IsString()
  username: string;

  @IsOptional()
  @IsString()
  senha: string;

  @IsOptional()
  @IsString()
  telefone: string;

  @IsOptional()
  @IsBoolean()
  ativo: boolean;

  @IsOptional()
  @IsString()
  pessoa: string;

  @IsOptional()
  @IsDateString()
  ultimaConexao: string;


}
