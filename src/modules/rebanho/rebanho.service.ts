import { Injectable } from '@nestjs/common';
import { RebanhoDTO } from './dto';
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
}
