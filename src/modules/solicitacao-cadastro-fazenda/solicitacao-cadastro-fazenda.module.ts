import { Module } from '@nestjs/common';
import { SolicitacaoCadastroFazendaService } from './solicitacao-cadastro-fazenda.service';
import { SolicitacaoCadastroFazendaController } from './solicitacao-cadastro-fazenda.controller';

@Module({
  controllers: [SolicitacaoCadastroFazendaController],
  providers: [SolicitacaoCadastroFazendaService],
})
export class SolicitacaoCadastroFazendaModule {}
