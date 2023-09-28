import { Injectable } from '@nestjs/common';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';
import { ComunicacaoCoberturaRepository } from 'src/shared/database/repositories/comunicacao-cobertura.repositories';

@Injectable()
export class ComunicacaoCoberturaService {
  constructor(private comunicacaoCoberturaRepository: ComunicacaoCoberturaRepository) {}

  async cadastrarCobertura(dto, animaisData) {
    const animais = animaisData.map((animal) => ({
       id: animal.id ,
    }));

    const comunicacaoCobertura = await this.comunicacaoCoberturaRepository.create({
      data: {
        ...dto,
        animais: {
        connect: animais,
      },
      }
    });

    return comunicacaoCobertura;
  }

  async getCoberturas() {
    const coberturas = await this.comunicacaoCoberturaRepository.findMany({include:{animais:true}});

    return coberturas;
  }

  async getCoberturasByCriadorId(id: string) {
    const coberturas = await this.comunicacaoCoberturaRepository.findMany({
      where:{
        criadorCobertura: id
      },
      include: {
        animais: true
      }
    });

    return coberturas;
  }

  async getCoberturaById(id: string) {
    const coberturas = await this.comunicacaoCoberturaRepository.findUnique({
      where: {
        id,
      },
    });

    return coberturas;
  }

  async updateCobertura(dto, animais, id: string) {
    const animaisId = animais.map((animal) => ({
      id: animal.id ,
   }));
    const updateCobertura = await this.comunicacaoCoberturaRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
        animais:{
          connect: animaisId
        }
      },
      
    });

    return updateCobertura;
  }

  async deleteCoberturaId(id: string) {
    const deleteCobertura = await this.comunicacaoCoberturaRepository.delete({
      where: {
        id,
      },
    });

    return deleteCobertura;
  }
}
