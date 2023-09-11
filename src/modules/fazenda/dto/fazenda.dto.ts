import { IsNotEmpty, IsString, IsUUID, IsBoolean, IsInt, IsOptional, IsDateString } from 'class-validator';

export class FazendaDTO {
  @IsNotEmpty()
  @IsUUID()
  criadorFazenda: string;

  @IsString()
  areaFazenda: string;

  @IsString()
  atualizacoes: string;

  @IsString()
  comoChegar: string;

  @IsBoolean()
  fazendaCadastrada: boolean;

  @IsInt()
  femeas04Fazenda: number;

  @IsInt()
  femeas1224Fazenda: number;

  @IsInt()
  femeas2436Fazenda: number;

  @IsInt()
  femeas36Fazenda: number;

  @IsInt()
  femeas412Fazenda: number;

  @IsInt()
  macho04Fazenda: number;

  @IsInt()
  macho1224Fazenda: number;

  @IsInt()
  macho2436Fazenda: number;

  @IsInt()
  macho36Fazenda: number;

  @IsInt()
  macho412Fazenda: number;

  @IsString()
  municipioFazenda: string;

  @IsString()
  nomeFazenda: string;

  @IsString()
  observacoes: string;

  @IsString()
  outrasEspecies: string;

  @IsString()
  telefoneFazenda: string;
}

export class UpdateFazendaDTO {
  @IsOptional()
  @IsString()
  areaFazenda: string;

  @IsOptional()
  @IsString()
  atualizacoes: string;

  @IsOptional()
  @IsString()
  comoChegar: string;

  @IsOptional()
  @IsBoolean()
  fazendaCadastrada: boolean;

  @IsOptional()
  @IsInt()
  femeas04Fazenda: number;

  @IsOptional()
  @IsInt()
  femeas1224Fazenda: number;

  @IsOptional()
  @IsInt()
  femeas2436Fazenda: number;

  @IsOptional()
  @IsInt()
  femeas36Fazenda: number;

  @IsOptional()
  @IsInt()
  femeas412Fazenda: number;

  @IsOptional()
  @IsInt()
  macho04Fazenda: number;

  @IsOptional()
  @IsInt()
  macho1224Fazenda: number;

  @IsOptional()
  @IsInt()
  macho2436Fazenda: number;

  @IsOptional()
  @IsInt()
  macho36Fazenda: number;

  @IsOptional()
  @IsInt()
  macho412Fazenda: number;

  @IsOptional()
  @IsInt()
  municipioFazenda: string;

  @IsOptional()
  @IsString()
  nomeFazenda: string;

  @IsOptional()
  @IsString()
  observacoes: string;

  @IsOptional()
  @IsString()
  outrasEspecies: string;

  @IsOptional()
  @IsString()
  telefoneFazenda: string;
}
