import { Injectable } from '@nestjs/common';
import { AnimalDTO } from './dto/animal.dto';
import { AnimalRepository } from 'src/shared/database/repositories/animal.repositories';

@Injectable()
export class AnimalService {
  constructor(private animalRepository: AnimalRepository) {}

  async cadastrarAnimal(dto: AnimalDTO) {
    const animal = await this.animalRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
