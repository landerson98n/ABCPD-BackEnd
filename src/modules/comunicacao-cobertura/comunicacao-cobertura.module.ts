import { Module } from '@nestjs/common';
import { ComunicacaoCoberturaService } from './comunicacao-cobertura.service';
import { ComunicacaoCoberturaController } from './comunicacao-cobertura.controller';

@Module({
  controllers: [ComunicacaoCoberturaController],
  providers: [ComunicacaoCoberturaService],
})
export class ComunicacaoCoberturaModule {}
