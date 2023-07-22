import { IsString, IsBoolean, IsOptional, IsDateString } from 'class-validator';

export class UserDTO {
  @IsDateString()
  dateJoined: string;

  @IsString()
  nomePrimeiro: string;

  @IsString()
  nomeUltimo: string;

  @IsString()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  username: string;

  @IsString()
  senha: string;

  @IsString()
  telefone: string;

  @IsOptional()
  @IsBoolean()
  ativo: boolean;

  // Opcional ou apagar
  @IsOptional()
  @IsString()
  pessoa: string;

  @IsDateString()
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
