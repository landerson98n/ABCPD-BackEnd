import { Injectable } from '@nestjs/common';
import { TransferirAnimalDTO } from './dto/transferir-animal.dto';
import { TransferirAnimalRepository } from 'src/shared/database/repositories/transferir-animal.repositories';

@Injectable()
export class TransferirAnimalService {
  constructor(private transferirAnimalRepository: TransferirAnimalRepository) {}

  async transferirAnimal(dto: TransferirAnimalDTO) {
    const animal = await this.transferirAnimalRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }

  async getTransferirAnimal() {
    const animais = await this.transferirAnimalRepository.findMany();

    return animais;
  }

  async getTransferirAnimalById(id: string) {
    const animal = await this.transferirAnimalRepository.findUnique({
      where: {
        id,
      },
    });

    return animal;
  }

  async updateTransferirAnimal(dto: TransferirAnimalDTO, id: string) {
    const Animal = await this.transferirAnimalRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return Animal;
  }

  async deleteTransferirAnimal(id: string) {
    const Animal = await this.transferirAnimalRepository.delete({
      where: {
        id,
      },
    });

    return Animal;
  }
}
