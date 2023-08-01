import { Injectable } from '@nestjs/common';
import { RegistroAnimalBaseDTO } from './dto/registro-animal-base.dto';
import { RegistroAnimalBaseRepository } from 'src/shared/database/repositories/registroAnimalBase.repositories';

@Injectable()
export class RegistroAnimalBaseService {
  constructor(private registroAnimalBaseRepository: RegistroAnimalBaseRepository) {}

  async registroAnimalBase(dto: RegistroAnimalBaseDTO) {
    const animalBase = await this.registroAnimalBaseRepository.create({
      data: {
        ...dto,
      },
    });

    return animalBase;
  }

  async getRegistroAnimaisBases() {
    const animaisBases = await this.registroAnimalBaseRepository.findMany();

    return animaisBases;
  }

  async getRegistroAnimalBaseById(id: string) {
    const animalBase = await this.registroAnimalBaseRepository.findUnique({
      where: {
        id,
      },
    });

    return animalBase;
  }

  async updateRegistroAnimalBase(dto: RegistroAnimalBaseDTO, id: string) {
    const animalBase = await this.registroAnimalBaseRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return animalBase;
  }

  async deleteRegistroAnimalBase(id: string) {
    const deleteAnimalBase = await this.registroAnimalBaseRepository.delete({
      where: {
        id,
      },
    });

    return deleteAnimalBase;
  }
}
