import { IsUUID, IsISO8601, IsNotEmpty, IsString } from 'class-validator';

export class TransferirAnimalDTO {
  @IsUUID()
  @IsNotEmpty()
  adquirente: string;

  @IsUUID()
  @IsNotEmpty()
  animal: string;

  @IsString()
  fazendaAdquirente: string;

  @IsString()
  fazendaTransmitente: string;

  @IsString()
  transmitente: string;

  @IsISO8601()
  dataTransferencia: Date;

  @IsString()
  nomeAnimal: string;
}
