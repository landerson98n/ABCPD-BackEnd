import { Injectable } from '@nestjs/common';
import { ComunicacaoObitoDto } from './dto/comunicacaoObito.dto';
import { ComunicacaoObitoRepository } from 'src/shared/database/repositories/comunicacao-obito.repositories';

@Injectable()
export class ComunicacaoObitoService {
  constructor(private comunicacaoObitoRepository: ComunicacaoObitoRepository) {}

  async cadastrarObito(dto: ComunicacaoObitoDto) {
    const obito = await this.comunicacaoObitoRepository.create({
      data: {
        ...dto,
      },
    });

    return obito;
  }

  async getObitos() {
    const obitos = await this.comunicacaoObitoRepository.findMany();

    return obitos;
  }

  async getObitoBydId(id: string) {
    const obito = await this.comunicacaoObitoRepository.findUnique({
      where: {
        id,
      },
    });

    return obito;
  }

  async updateObito(dto: ComunicacaoObitoDto, id: string) {
    const obito = await this.comunicacaoObitoRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return obito;
  }

  async deleteObito(id: string) {
    const obito = await this.comunicacaoObitoRepository.delete({
      where: {
        id,
      },
    });

    return obito;
  }
}
