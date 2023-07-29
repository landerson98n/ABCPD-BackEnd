import { IsUUID, IsNotEmpty, IsString, IsBoolean, IsDateString } from 'class-validator';

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

  @IsDateString()
  dataComunicacao: string;

  @IsDateString()
  dataNascimento: string;

  @IsBoolean()
  finalizadoNascimento: boolean;

  @IsString()
  observacoes: string;

  @IsString()
  statusNascimento: string;
}
