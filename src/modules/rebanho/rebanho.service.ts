import { Injectable } from '@nestjs/common';
import { RebanhoDTO, UpdateRebanhoDTO } from './dto';
import { RebanhoRepository } from 'src/shared/database/repositories/rebanho.repositories';

@Injectable()
export class RebanhoService {
  constructor(private rebanhoRepository: RebanhoRepository) {}

  async cadastrarRebanho(dto: RebanhoDTO) {
    const rebanho = await this.rebanhoRepository.create({
      data: {
        ...dto,
      },
    });

    return rebanho;
  }

  async getRebanhos() {
    const Rebanhos = await this.rebanhoRepository.findMany();

    return Rebanhos;
  }

  async getRebanhoBydId(id: string) {
    const Rebanho = await this.rebanhoRepository.findUnique({
      where: {
        id,
      },
    });

    return Rebanho;
  }

  async updateRebanho(dto: UpdateRebanhoDTO, id: string) {
    const updateRebanho = await this.rebanhoRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateRebanho;
  }

  async deleteRebanho(id: string) {
    const deleteRebanho = await this.rebanhoRepository.delete({
      where: {
        id,
      },
    });

    return deleteRebanho;
  }
}
