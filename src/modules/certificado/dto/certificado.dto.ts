import { IsString } from 'class-validator';

export class CertificadoDTO {
  @IsString()
  codigo: string;
}
