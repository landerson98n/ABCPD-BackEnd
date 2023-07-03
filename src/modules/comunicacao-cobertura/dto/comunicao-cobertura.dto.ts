import {
  IsUUID,
  IsISO8601,
  IsNotEmpty,
  IsString,
  IsBoolean,
} from 'class-validator';

export class ComunicacaoCoberturaDto {
  @IsUUID()
  @IsNotEmpty()
  criadorCobertura: string;

  @IsUUID()
  @IsNotEmpty()
  fazendaCobertura: string;

  @IsString()
  comprovantePagamento: string;

  @IsISO8601()
  dataCobertura: Date;

  @IsBoolean()
  finalizadoCobertura: boolean;

  @IsString()
  nomeCobertura: string;

  @IsString()
  observacoes: string;

  @IsString()
  statusCobertura: string;

  @IsString()
  tipoCobertura: string;
}
