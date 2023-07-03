import { Module } from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoController } from './comunicacao-nascimento.controller';

@Module({
  controllers: [ComunicacaoNascimentoController],
  providers: [ComunicacaoNascimentoService],
})
export class ComunicacaoNascimentoModule {}
