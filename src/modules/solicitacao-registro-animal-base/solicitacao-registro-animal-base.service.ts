import { Injectable } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseDTO } from './dto/solicitacao-registro-animal-base.dto';
import { SolicitacaoRegistroAnimalBaseRepository } from 'src/shared/database/repositories/solicitacao-registro-animal-base.repositories';

@Injectable()
export class SolicitacaoRegistroAnimalBaseService {
  constructor(
    private solicitacaoRegistroAnimalBaseRepository: SolicitacaoRegistroAnimalBaseRepository,
  ) {}

  async transferirAnimal(dto: SolicitacaoRegistroAnimalBaseDTO) {
    const animal = await this.solicitacaoRegistroAnimalBaseRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
