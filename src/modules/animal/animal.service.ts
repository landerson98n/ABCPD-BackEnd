import { Injectable } from '@nestjs/common';
import { AnimalDTO, UpdateAnimalDTO } from './dto/animal.dto';
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

  async getAnimais() {
    const animais = await this.animalRepository.findMany();

    return animais;
  }

  async getAnimalBydId(id: string) {
    const animal = await this.animalRepository.findUnique({
      where: {
        id,
      },
    });

    return animal;
  }

  async updateAnimal(dto: UpdateAnimalDTO, id: string) {
    const updateAnimal = await this.animalRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateAnimal;
  }

  async deleteAnimal(id: string) {
    const deleteAnimal = await this.animalRepository.delete({
      where: {
        id,
      },
    });

    return deleteAnimal;
  }
}
