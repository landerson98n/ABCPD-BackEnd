import { Module } from '@nestjs/common';
import { SolicitacaoCadastroCriadorService } from './solicitacao-cadastro-criador.service';
import { SolicitacaoCadastroCriadorController } from './solicitacao-cadastro-criador.controller';

@Module({
  controllers: [SolicitacaoCadastroCriadorController],
  providers: [SolicitacaoCadastroCriadorService]
})
export class SolicitacaoCadastroCriadorModule {}
