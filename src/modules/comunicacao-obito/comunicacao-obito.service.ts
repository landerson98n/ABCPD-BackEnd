import { Injectable } from '@nestjs/common';
import { ComunicacaoObitoDto } from './dto/comunicacaoObito.dto';
import { ComunicacaoObitoRepository } from 'src/shared/database/repositories/comunicacao-obito.repositories';

@Injectable()
export class ComunicacaoObitoService {
  constructor(private comunicacaoObitoRepository: ComunicacaoObitoRepository) {}

  async cadastrarAnimal(dto: ComunicacaoObitoDto) {
    const animal = await this.comunicacaoObitoRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
