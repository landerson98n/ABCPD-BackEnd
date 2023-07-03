import { Injectable } from '@nestjs/common';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';
import { ComunicacaoCoberturaRepository } from 'src/shared/database/repositories/comunicacao-cobertura.repositories';

@Injectable()
export class ComunicacaoCoberturaService {
  constructor(
    private comunicacaoCoberturaRepository: ComunicacaoCoberturaRepository,
  ) {}

  async cadastrarCobertura(dto: ComunicacaoCoberturaDto) {
    const animal = await this.comunicacaoCoberturaRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
