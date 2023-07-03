import { IsUUID, IsNotEmpty } from 'class-validator';

export class solicitacaoCadastroFazendaDTO {
  @IsUUID()
  @IsNotEmpty()
  fazendaId: string;

  @IsUUID()
  @IsNotEmpty()
  solicitacaoCadastroCriadorId: string;
}
