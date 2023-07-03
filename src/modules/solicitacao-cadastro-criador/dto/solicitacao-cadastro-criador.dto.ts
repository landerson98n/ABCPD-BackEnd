import { IsUUID, IsNotEmpty, IsString } from 'class-validator';

export class solicitacaoCadatroCriadorDTO {
  @IsUUID()
  @IsNotEmpty()
  criadoId: string;

  @IsString()
  comprovantePagamento: string;
}
