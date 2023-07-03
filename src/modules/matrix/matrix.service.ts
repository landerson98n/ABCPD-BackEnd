import { Injectable } from '@nestjs/common';
import { MatrixDTO } from './dto/matrix.dto';
import { MatrixRepository } from 'src/shared/database/repositories/matrix.repositories';

@Injectable()
export class MatrixService {
  constructor(private animalRepository: MatrixRepository) {}

  async cadastrarMatrix(dto: MatrixDTO) {
    const animal = await this.animalRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
