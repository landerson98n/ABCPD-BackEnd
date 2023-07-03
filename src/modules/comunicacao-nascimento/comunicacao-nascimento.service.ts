import { Injectable } from '@nestjs/common';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';
import { ComunicacaoNascimentoRepository } from 'src/shared/database/repositories/comunicacao-nascimento.repositories';

@Injectable()
export class ComunicacaoNascimentoService {
  constructor(
    private comunicacaoNascimentoRepository: ComunicacaoNascimentoRepository,
  ) {}

  async comunicacaoNascimento(dto: ComunicacaoNascimentoDto) {
    const animal = await this.comunicacaoNascimentoRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
