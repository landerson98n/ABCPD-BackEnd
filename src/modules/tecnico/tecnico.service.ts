import { Injectable } from '@nestjs/common';
import { TecnicoDTO, UpdateTecnicoDTO } from './dto/tecnico.dto';
import { TecnicoRepository } from 'src/shared/database/repositories/tecnico.repositories';

@Injectable()
export class TecnicoService {
  constructor(private tecnicoRepository: TecnicoRepository) {}

  async cadastrarTecnico(dto: TecnicoDTO) {
    const tecnico = this.tecnicoRepository.create({
      data: {
        ...dto,
      },
    });

    return tecnico;
  }

  async getTecnicos() {
    const Tecnicos = await this.tecnicoRepository.findMany({
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

    return Tecnicos;
  }

  async getTecnicoBydId(id: string) {
    const Tecnico = await this.tecnicoRepository.findUnique({
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

    return Tecnico;
  }

  async getEmailTecnico(id: string) {
    const tecnico = await this.tecnicoRepository.findUnique({
      where: {
         id,
      },
      include: {
        user: {
          select: {
            email: true,
          },
        },
      },
      select:{}
    });

    return tecnico;
  }

  async updateTecnico(dto: UpdateTecnicoDTO, id: string) {
    const updateTecnico = await this.tecnicoRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateTecnico;
  }

  async deleteTecnico(id: string) {
    const deleteTecnico = await this.tecnicoRepository.delete({
      where: {
        id,
      },
    });

    return deleteTecnico;
  }
}
