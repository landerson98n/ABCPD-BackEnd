import { Injectable } from '@nestjs/common';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';
import { ComunicacaoCoberturaRepository } from 'src/shared/database/repositories/comunicacao-cobertura.repositories';

@Injectable()
export class ComunicacaoCoberturaService {
  constructor(private comunicacaoCoberturaRepository: ComunicacaoCoberturaRepository) {}

  async cadastrarCobertura(dto: ComunicacaoCoberturaDto) {
    const comunicacaoCobertura = await this.comunicacaoCoberturaRepository.create({
      data: {
        ...dto,
      },
    });

    return comunicacaoCobertura;
  }

  async getCoberturas() {
    const coberturas = await this.comunicacaoCoberturaRepository.findMany();

    return coberturas;
  }

  async getCoberturaById(id: string) {
    const coberturas = await this.comunicacaoCoberturaRepository.findUnique({
      where: {
        id,
      },
    });

    return coberturas;
  }

  async updateCobertura(dto: ComunicacaoCoberturaDto, id: string) {
    const updateCobertura = await this.comunicacaoCoberturaRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateCobertura;
  }

  async deleteCoberturaId(id: string) {
    const deleteCobertura = await this.comunicacaoCoberturaRepository.delete({
      where: {
        id,
      },
    });

    return deleteCobertura;
  }
}
