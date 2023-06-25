import { Injectable } from '@nestjs/common';
import { AnimalDTO } from './dto';
import { AnimalRepository } from 'src/shared/database/repositories/animal.repositories';

@Injectable()
export class AnimalService {
  constructor(private animalRep: AnimalRepository) {}

  async cadastrarAnimal(dto: AnimalDTO) {
    const animal = await this.animalRep.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
