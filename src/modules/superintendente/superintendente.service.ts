import { Injectable } from '@nestjs/common';
import { SuperintendenteDTO } from './dto/superintendente.dto';
import { SuperintendenteRepository } from 'src/shared/database/repositories/superintendente.repositories';

@Injectable()
export class SuperintendenteService {
  constructor(private superintendenteRepository: SuperintendenteRepository) {}

  cadastrarSuperintendente(dto: SuperintendenteDTO) {
    const Superintendente = this.superintendenteRepository.create({
      data: {
        ...dto,
      },
    });

    return Superintendente;
  }
}
