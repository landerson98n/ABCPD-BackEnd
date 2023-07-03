import { IsUUID, IsNotEmpty, IsString } from 'class-validator';

export class SolicitacaoRegistroAnimalBaseDTO {
  @IsUUID()
  @IsNotEmpty()
  criadorId: string;

  @IsUUID()
  @IsNotEmpty()
  tecnicoId: string;

  @IsString()
  estadoSolicitacao: string;
}
