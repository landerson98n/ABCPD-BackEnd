import { Injectable } from '@nestjs/common';
import { solicitacaoCadastroFazendaDTO } from './dto/solicitacao-cadastro-fazenda.dto';
import { SolicitacaoCadatroFazendaRepository } from 'src/shared/database/repositories/solicitacao-cadastro-fazenda.repositories';

@Injectable()
export class SolicitacaoCadastroFazendaService {
  constructor(private animalRepository: SolicitacaoCadatroFazendaRepository) {}

  async solicitacaoCadastroFazenda(dto: solicitacaoCadastroFazendaDTO) {
    const animal = await this.animalRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
