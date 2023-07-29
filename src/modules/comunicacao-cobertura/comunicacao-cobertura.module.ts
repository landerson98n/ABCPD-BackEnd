import { Module } from '@nestjs/common';
import { ComunicacaoCoberturaService } from './comunicacao-cobertura.service';
import { ComunicacaoCoberturaController } from './comunicacao-cobertura.controller';
import { UserModule } from '../user/user.module';
import { CriadorModule } from '../criador/criador.module';
import { FazendaModule } from '../fazenda/fazenda.module';

@Module({
  imports: [UserModule, CriadorModule, FazendaModule],
  controllers: [ComunicacaoCoberturaController],
  providers: [ComunicacaoCoberturaService],
  exports: [ComunicacaoCoberturaService],
})
export class ComunicacaoCoberturaModule {}
