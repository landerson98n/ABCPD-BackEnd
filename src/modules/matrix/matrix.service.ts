import { Injectable } from '@nestjs/common';
import { MatrixDTO } from './dto/matrix.dto';
import { MatrixRepository } from 'src/shared/database/repositories/matrix.repositories';

@Injectable()
export class MatrixService {
  constructor(private matrixRepository: MatrixRepository) {}

  async cadastrarMatrix(dto: MatrixDTO) {
    const animal = await this.matrixRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }

  async getMatrix() {
    const matrix = await this.matrixRepository.findMany();

    return matrix;
  }

  async getMatrixBydId(id: string) {
    const matrix = await this.matrixRepository.findUnique({
      where: {
        id,
      },
    });

    return matrix;
  }

  async updateMatrix(dto: MatrixDTO, id: string) {
    const matrix = await this.matrixRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return matrix;
  }

  async deleteMatrix(id: string) {
    const matrix = await this.matrixRepository.delete({
      where: {
        id,
      },
    });

    return matrix;
  }
}
