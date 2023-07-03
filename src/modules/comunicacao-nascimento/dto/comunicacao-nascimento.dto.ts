import {
  IsUUID,
  IsISO8601,
  IsNotEmpty,
  IsString,
  IsBoolean,
} from 'class-validator';

export class ComunicacaoNascimentoDto {
  @IsUUID()
  @IsNotEmpty()
  coberturaRegistradaId: string;

  @IsUUID()
  @IsNotEmpty()
  criadorNascimentoId: string;

  @IsUUID()
  @IsNotEmpty()
  fazendaNascimentoId: string;

  @IsUUID()
  @IsNotEmpty()
  matrizAnimalId: string;

  @IsUUID()
  @IsNotEmpty()
  reprodutorAnimalId: string;

  @IsUUID()
  @IsNotEmpty()
  tecnicoNascimentoId: string;

  @IsNotEmpty()
  animalBezerro: string;

  @IsISO8601()
  dataComunicacao: Date;

  @IsISO8601()
  dataNascimento: Date;

  @IsBoolean()
  finalizadoNascimento: boolean;

  @IsString()
  observacoes: string;

  @IsString()
  statusNascimento: string;
}
