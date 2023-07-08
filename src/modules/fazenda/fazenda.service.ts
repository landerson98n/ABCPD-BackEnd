import { Injectable } from '@nestjs/common';
import { FazendaDTO, UpdateFazendaDTO } from './dto/fazenda.dto';
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

  async getFazendas() {
    const fazendas = await this.fazendaRepository.findMany();

    return fazendas;
  }

  async getFazendaBydId(id: string) {
    const Fazenda = await this.fazendaRepository.findUnique({
      where: {
        id,
      },
    });

    return Fazenda;
  }

  async updateFazenda(dto: UpdateFazendaDTO, id: string) {
    const updateFazenda = await this.fazendaRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateFazenda;
  }

  async deleteFazenda(id: string) {
    const deleteFazenda = await this.fazendaRepository.delete({
      where: {
        id,
      },
    });

    return deleteFazenda;
  }
}
