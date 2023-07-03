import { IsUUID, IsNotEmpty, IsInt } from 'class-validator';

export class RegistroAnimalBaseDTO {
  @IsUUID()
  @IsNotEmpty()
  solicitacao: string;

  @IsInt()
  quantidadeAnimais: number;
}
