import { IsString, IsUUID, IsNotEmpty, IsOptional } from 'class-validator';

export class RebanhoDTO {
  @IsNotEmpty()
  @IsUUID()
  fazendaId: string;

  @IsNotEmpty()
  @IsUUID()
  criadorId: string;

  @IsString()
  @IsNotEmpty()
  serie: string;
}

export class UpdateRebanhoDTO {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  serie: string;
}
