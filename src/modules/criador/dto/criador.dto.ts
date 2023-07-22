import { IsUUID, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CriadorDTO {
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsString()
  cep: string;
  @IsString()
  nomeBairro: string;
  @IsString()
  nomeCidade: string;
  @IsString()
  nomeCompleto: string;
  @IsString()
  nomeEstado: string;
  @IsString()
  nomeRua: string;
  @IsString()
  rg: string;
}

export class UpdateCriadorDTO {
  @IsString()
  @IsOptional()
  cep: string;
  @IsString()
  @IsOptional()
  nomeBairro: string;
  @IsString()
  @IsOptional()
  nomeCidade: string;
  @IsString()
  @IsOptional()
  nomeCompleto: string;
  @IsString()
  @IsOptional()
  nomeEstado: string;
  @IsString()
  @IsOptional()
  nomeRua: string;
  @IsString()
  @IsOptional()
  rg: string;
}
