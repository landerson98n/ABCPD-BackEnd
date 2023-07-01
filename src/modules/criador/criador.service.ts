import { Injectable } from '@nestjs/common';
import { CriadorDTO } from './dto/criador.dto';
import { CriadorRepository } from 'src/shared/database/repositories/criador.repositories';

@Injectable()
export class CriadorService {
  constructor(private criadorRepository: CriadorRepository) {}

  async cadastrarCriador(dto: CriadorDTO) {
    const criador = await this.criadorRepository.create({
      data: {
        ...dto,
      },
    });
    return criador;
  }
}
