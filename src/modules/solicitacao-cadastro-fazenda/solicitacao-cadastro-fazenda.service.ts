import { Injectable } from '@nestjs/common';
import { solicitacaoCadastroFazendaDTO } from './dto/solicitacao-cadastro-fazenda.dto';
import { SolicitacaoCadatroFazendaRepository } from 'src/shared/database/repositories/solicitacao-cadastro-fazenda.repositories';

@Injectable()
export class SolicitacaoCadastroFazendaService {
  constructor(private solicitacaoCadatroFazendaRepository: SolicitacaoCadatroFazendaRepository) {}

  async solicitacaoCadastroFazenda(dto: solicitacaoCadastroFazendaDTO) {
    const cadastroFazenda = await this.solicitacaoCadatroFazendaRepository.create({
      data: {
        ...dto,
      },
    });

    return cadastroFazenda;
  }

  async getSolicitacaoCadastroFazenda() {
    const animais = await this.solicitacaoCadatroFazendaRepository.findMany();

    return animais;
  }

  async getSolicitacaoCadastroFazendaById(id: string) {
    const cadastroFazenda = await this.solicitacaoCadatroFazendaRepository.findUnique({
      where: {
        id,
      },
    });

    return cadastroFazenda;
  }

  async updateSolicitacaoCadastroFazenda(dto: solicitacaoCadastroFazendaDTO, id: string) {
    const updateCadastroFazenda = await this.solicitacaoCadatroFazendaRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateCadastroFazenda;
  }

  async deleteSolicitacaoCadastroFazenda(id: string) {
    const deleteCadastroFazenda = await this.solicitacaoCadatroFazendaRepository.delete({
      where: {
        id,
      },
    });

    return deleteCadastroFazenda;
  }
}
