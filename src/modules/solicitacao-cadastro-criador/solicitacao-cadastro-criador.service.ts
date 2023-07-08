import { Injectable } from '@nestjs/common';
import { solicitacaoCadatroCriadorDTO } from './dto/solicitacao-cadastro-criador.dto';
import { SolicitacaoCadatroCriadorRepository } from 'src/shared/database/repositories/solicitacao-cadastro-criador.repositories';

@Injectable()
export class SolicitacaoCadastroCriadorService {
  constructor(private solicitacaoCadatroCriadorRepository: SolicitacaoCadatroCriadorRepository) {}

  async solicitacaoCadatroCriador(dto: solicitacaoCadatroCriadorDTO) {
    const criador = await this.solicitacaoCadatroCriadorRepository.create({
      data: {
        ...dto,
      },
    });

    return criador;
  }

  async getSolicitacaoCadatroCriador() {
    const criadores = await this.solicitacaoCadatroCriadorRepository.findMany();

    return criadores;
  }

  async getSolicitacaoCadatroCriadorById(id: string) {
    const criador = await this.solicitacaoCadatroCriadorRepository.findUnique({
      where: {
        id,
      },
    });

    return criador;
  }

  async updateSolicitacaoCadatroCriador(dto: solicitacaoCadatroCriadorDTO, id: string) {
    const updateCriador = await this.solicitacaoCadatroCriadorRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateCriador;
  }

  async deleteSolicitacaoCadatroCriador(id: string) {
    const deleteCriador = await this.solicitacaoCadatroCriadorRepository.delete({
      where: {
        id,
      },
    });

    return deleteCriador;
  }
}
