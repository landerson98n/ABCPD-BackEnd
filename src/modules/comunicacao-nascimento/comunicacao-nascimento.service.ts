import { Injectable } from '@nestjs/common';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';
import { ComunicacaoNascimentoRepository } from 'src/shared/database/repositories/comunicacao-nascimento.repositories';

@Injectable()
export class ComunicacaoNascimentoService {
  constructor(private comunicacaoNascimentoRepository: ComunicacaoNascimentoRepository) {}

  async comunicacaoNascimento(dto: ComunicacaoNascimentoDto) {
    const animal = await this.comunicacaoNascimentoRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }

  async getComunicacaoNascimento() {
    const ComunicacaoNascimento = await this.comunicacaoNascimentoRepository.findMany({});

    return ComunicacaoNascimento;
  }

  async getComunicacaoNascimentoById(id: string) {
    const ComunicacaoNascimentoById = await this.comunicacaoNascimentoRepository.findUnique({
      where: {
        id,
      },
    });

    return ComunicacaoNascimentoById;
  }

  async getComunicacaoNascimentoByIdCriador(id: string) {
    const ComunicacaoNascimentoById = await this.comunicacaoNascimentoRepository.findMany({
      where: {
        criadorNascimentoId : id
      },
    });
    return ComunicacaoNascimentoById;
  }

  async updateComunicacaoNascimentoId(dto: ComunicacaoNascimentoDto, id: string) {
    const updateComunicacaoNascimento = await this.comunicacaoNascimentoRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return updateComunicacaoNascimento;
  }

  async deleteComunicacaoNascimentoId(id: string) {
    const deleteComunicacaoNascimento = await this.comunicacaoNascimentoRepository.delete({
      where: {
        id,
      },
    });

    return deleteComunicacaoNascimento;
  }
}
