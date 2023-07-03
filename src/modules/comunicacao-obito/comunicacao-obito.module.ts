import { Module } from '@nestjs/common';
import { ComunicacaoObitoService } from './comunicacao-obito.service';
import { ComunicacaoObitoController } from './comunicacao-obito.controller';

@Module({
  controllers: [ComunicacaoObitoController],
  providers: [ComunicacaoObitoService],
})
export class ComunicacaoObitoModule {}
