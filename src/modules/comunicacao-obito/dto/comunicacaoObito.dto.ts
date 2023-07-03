import { IsUUID, IsISO8601, IsNotEmpty, IsString } from 'class-validator';

export class ComunicacaoObitoDto {
  @IsUUID()
  @IsNotEmpty()
  animalId: string;

  @IsString()
  causa: string;

  @IsISO8601()
  dataObito: string;

  @IsString()
  nomeAnimal: string;
}
