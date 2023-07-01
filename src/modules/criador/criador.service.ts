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

  async getCriadores(){
    const criadores = await this.criadorRepository.findMany()

    return criadores
  }

  async getCriadorBydId(id: string){
    const Criador = await this.criadorRepository.findUnique({
      where:{
         id
      }
    })

    return Criador
  }

  async updateCriador(dto: UpdateCriadorDTO, id: string){
    const updateCriador = await this.criadorRepository.update({
      where:{
        id
      },
      data:{
        ...dto
      }
    })

    return updateCriador
  }

  async deleteCriador(id: string){
    const deleteCriador = await this.criadorRepository.delete({
      where:{
        id
      }
    })

    return deleteCriador
  }
}
