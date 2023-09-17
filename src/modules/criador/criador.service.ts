import { Injectable } from '@nestjs/common';
import { CriadorDTO, UpdateCriadorDTO } from './dto/criador.dto';
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

  async getCriadores() {
    const criadores = await this.criadorRepository.findMany({
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

    return criadores;
  }

  async getCriadorBydId(id: string) {
    const criador = await this.criadorRepository.findUnique({
      where: {
        id,
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

    return criador;
  }

  async getCriadorByUserId(id: string) {
    const criador = await this.criadorRepository.findFirst({
      where: {
        userId: id,
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

    return criador;
  }

  async updateCriador(dto: UpdateCriadorDTO, id: string) {
    const updateCriador = await this.criadorRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateCriador;
  }

  async deleteCriador(id: string) {
    const deleteCriador = await this.criadorRepository.delete({
      where: {
        id,
      },
    });

    return deleteCriador;
  }
}
