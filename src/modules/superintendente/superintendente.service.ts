import { Injectable } from '@nestjs/common';
import { SuperintendenteDTO } from './dto/superintendente.dto';
import { SuperintendenteRepository } from 'src/shared/database/repositories/superintendente.repositories';

@Injectable()
export class SuperintendenteService {
  constructor(private superintendenteRepository: SuperintendenteRepository) {}

  cadastrarSuperintendente(dto: SuperintendenteDTO) {
    const superintendente = this.superintendenteRepository.create({
      data: {
        ...dto,
      },
    });

    return superintendente;
  }

  async getSuperintendentes() {
    const superintendente = await this.superintendenteRepository.findMany({
      include: {
        user: {
          select: {
            dateJoined: true,
            nomePrimeiro: true,
            nomeUltimo: true,
            email: true,
            cpf: true,
            username: true,
            telefone: true,
            ativo: true,
            pessoa: true,
            ultimaConexao: true,
          },
        },
      },
    });

    return superintendente;
  }

  async getSuperintendenteById(userId: string) {
    const superintendente = await this.superintendenteRepository.findUnique({
      where: {
        id: userId,
      },
      include: {
        user: {
          select: {
            dateJoined: true,
            nomePrimeiro: true,
            nomeUltimo: true,
            email: true,
            cpf: true,
            username: true,
            telefone: true,
            ativo: true,
            pessoa: true,
            ultimaConexao: true,
          },
        },
      },
    });


    return superintendente;
  }

  async deleteSuperintendente(id: string) {
    const deleteSuperintendente = await this.superintendenteRepository.delete({
      where: {
        id,
      },
    });

    return deleteSuperintendente;
  }
}
