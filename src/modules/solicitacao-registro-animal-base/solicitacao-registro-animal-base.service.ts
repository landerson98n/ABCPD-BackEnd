import { Injectable } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseDTO } from './dto/solicitacao-registro-animal-base.dto';
import { SolicitacaoRegistroAnimalBaseRepository } from 'src/shared/database/repositories/solicitacao-registro-animal-base.repositories';

@Injectable()
export class SolicitacaoRegistroAnimalBaseService {
  constructor(private solicitacaoRegistroAnimalBaseRepository: SolicitacaoRegistroAnimalBaseRepository) {}

  async cadastrarSolicitacaoRegistroAnimalBase(dto: SolicitacaoRegistroAnimalBaseDTO) {
    const solicitacaoRegistroAnimalBase = await this.solicitacaoRegistroAnimalBaseRepository.create({
      data: {
        ...dto,
      },
    });

    return solicitacaoRegistroAnimalBase;
  }

  async getSolicitacaoRegistroAnimalBase() {
    const solicitacaoRegistroAnimalBase = await this.solicitacaoRegistroAnimalBaseRepository.findMany();

    return solicitacaoRegistroAnimalBase;
  }

  async getSolicitacaoRegistroAnimalBaseById(id: string) {
    const animal = await this.solicitacaoRegistroAnimalBaseRepository.findUnique({
      where: {
        id,
      },
    });

    return animal;
  }

  async updateSolicitacaoRegistroAnimalBase(dto: SolicitacaoRegistroAnimalBaseDTO, id: string) {
    const updateAnimal = await this.solicitacaoRegistroAnimalBaseRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateAnimal;
  }

  async deleteSolicitacaoRegistroAnimalBase(id: string) {
    const deleteAnimal = await this.solicitacaoRegistroAnimalBaseRepository.delete({
      where: {
        id,
      },
    });

    return deleteAnimal;
  }
}
