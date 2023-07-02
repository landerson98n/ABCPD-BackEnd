import { Injectable } from '@nestjs/common';
import { SuperintendenteDTO } from './dto/superintendente.dto';
import { SuperintendenteRepository } from 'src/shared/database/repositories/superintendente.repositories';

@Injectable()
export class SuperintendenteService {
  constructor(
    private superintendenteRepository: SuperintendenteRepository,
  ) {}

  cadastrarSuperintendente(
    dto: SuperintendenteDTO,
  ) {
    const Superintendente =
      this.superintendenteRepository.create(
        {
          data: {
            ...dto,
          },
        },
      );

    return Superintendente;
  }

  async getSuperintendentes() {
    const Superintendentes =
      await this.superintendenteRepository.findMany();

    return Superintendentes;
  }

  async getSuperintendenteBydId(
    id: string,
  ) {
    const Superintendente =
      await this.superintendenteRepository.findUnique(
        {
          where: {
            id,
          },
        },
      );

    return Superintendente;
  }

  async deleteSuperintendente(
    id: string,
  ) {
    const deleteSuperintendente =
      await this.superintendenteRepository.delete(
        {
          where: {
            id,
          },
        },
      );

    return deleteSuperintendente;
  }
}
