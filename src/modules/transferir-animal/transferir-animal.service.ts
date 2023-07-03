import { Injectable } from '@nestjs/common';
import { TransferirAnimalDTO } from './dto/transferir-animal.dto';
import { TransferirAnimalRepository } from 'src/shared/database/repositories/transferir-animal.repositories copy';

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
}
