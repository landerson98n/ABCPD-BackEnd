import { IsUUID, IsNotEmpty, IsString, IsBoolean, IsArray } from 'class-validator';

export class ComunicacaoCoberturaDto {
  @IsUUID()
  @IsNotEmpty()
  criadorCobertura: string;

  @IsUUID()
  @IsNotEmpty()
  fazendaCobertura: string;

  @IsBoolean()
  pago: boolean;

  // @IsISO8601()
  // dataCobertura: Date;
  @IsNotEmpty()
  @IsArray()
  animais: string

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
