import { IsUUID, IsNotEmpty, IsString, IsInt } from 'class-validator';

export class SolicitacaoRegistroAnimalBaseDTO {
  @IsUUID()
  @IsNotEmpty()
  criadorId: string;

  @IsUUID()
  @IsNotEmpty()
  tecnicoId: string;

  @IsUUID()
  @IsNotEmpty()
  fazendaId: string;

  @IsUUID()
  @IsNotEmpty()
  rebanhoId: string;

  @IsString()
  estadoSolicitacao: string;

  @IsInt()
  @IsNotEmpty()
  quantidadeAnimais: number;
}
