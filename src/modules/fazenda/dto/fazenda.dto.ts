import {
  IsNotEmpty,
  IsString,
  IsUUID,
  IsISO8601,
  IsBoolean,
  IsInt,
} from 'class-validator';

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
  @IsISO8601()
  dataDocumentacao: Date;
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
  @IsInt()
  municipioFazenda: number;
  @IsString()
  nomeFazenda: string;
  @IsString()
  observacoes: string;
  @IsString()
  outrasEspecies: string;
  @IsString()
  proponente1: string;
  @IsString()
  proponente2: string;
  @IsString()
  proponente3: string;
  @IsString()
  telefoneFazenda: string;
}
