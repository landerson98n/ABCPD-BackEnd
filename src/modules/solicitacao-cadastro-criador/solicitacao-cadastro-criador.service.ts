import { Injectable } from '@nestjs/common';
import { solicitacaoCadatroCriadorDTO } from './dto/solicitacao-cadastro-criador.dto';
import { SolicitacaoCadatroCriadorRepository } from 'src/shared/database/repositories/solicitacao-cadastro-criador.repositories';

@Injectable()
export class SolicitacaoCadastroCriadorService {
  constructor(
    private solicitacaoCadatroCriadorRepository: SolicitacaoCadatroCriadorRepository,
  ) {}

  async solicitacaoCadatroCriador(dto: solicitacaoCadatroCriadorDTO) {
    const animal = await this.solicitacaoCadatroCriadorRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
