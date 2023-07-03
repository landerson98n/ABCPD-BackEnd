import { Module } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseService } from './solicitacao-registro-animal-base.service';
import { SolicitacaoRegistroAnimalBaseController } from './solicitacao-registro-animal-base.controller';

@Module({
  controllers: [SolicitacaoRegistroAnimalBaseController],
  providers: [SolicitacaoRegistroAnimalBaseService]
})
export class SolicitacaoRegistroAnimalBaseModule {}
