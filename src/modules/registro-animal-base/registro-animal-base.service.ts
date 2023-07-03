import { Injectable } from '@nestjs/common';
import { RegistroAnimalBaseDTO } from './dto/registro-animal-base.dto';
import { RegistroAnimalBaseRepository } from 'src/shared/database/repositories/registroAnimalBase.repositories';

@Injectable()
export class RegistroAnimalBaseService {
  constructor(
    private registroAnimalBaseRepository: RegistroAnimalBaseRepository,
  ) {}

  async registroAnimalBase(dto: RegistroAnimalBaseDTO) {
    const animal = await this.registroAnimalBaseRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
