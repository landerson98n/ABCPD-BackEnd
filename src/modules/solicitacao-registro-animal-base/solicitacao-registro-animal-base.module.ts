import { Module } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseService } from './solicitacao-registro-animal-base.service';
import { SolicitacaoRegistroAnimalBaseController } from './solicitacao-registro-animal-base.controller';
import { UserService } from '../user/user.service';
import { CriadorService } from '../criador/criador.service';
import { TecnicoService } from '../tecnico/tecnico.service';

@Module({
  controllers: [SolicitacaoRegistroAnimalBaseController],
  providers: [SolicitacaoRegistroAnimalBaseService, UserService, CriadorService, TecnicoService],
  imports:[]
})
export class SolicitacaoRegistroAnimalBaseModule {}
