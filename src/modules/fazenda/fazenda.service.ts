import { Injectable } from '@nestjs/common';
import { FazendaDTO } from './dto/fazenda.dto';
import { FazendaRepository } from 'src/shared/database/repositories/fazenda.repositories';

@Injectable()
export class FazendaService {
  constructor(private fazendaRepository: FazendaRepository) {}

  async cadastrarFazenda(dto: FazendaDTO) {
    const fazenda = await this.fazendaRepository.create({
      data: {
        ...dto,
      },
    });

    return fazenda;
  }
}
