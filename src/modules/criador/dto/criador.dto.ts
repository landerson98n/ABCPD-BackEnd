import { IsUUID, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CriadorDTO {
  @IsOptional()
  @IsNotEmpty()
  @IsUUID()
  userId: string;
  @IsString()
  @IsNotEmpty()
  cep: string;
  @IsString()
  nomeBairro: string;
  @IsString()
  nomeCidade: string;
  @IsString()
  @IsNotEmpty()
  nomeCompleto: string;
  @IsString()
  nomeEstado: string;
  @IsString()
  nomeRua: string;
  @IsNotEmpty()
  @IsString()
  rg: string;
  @IsNotEmpty()
  @IsString()
  numeroCasa: string
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
  @IsOptional()
  @IsString()
  asaasId: string
}
