import { Injectable } from '@nestjs/common';
import { CertificadoDTO } from './dto/certificado.dto';
import { CertificadoRepository } from 'src/shared/database/repositories/certificado.repositories';

@Injectable()
export class CertificadoService {
  constructor(private certificadoRepository: CertificadoRepository) {}

  async cadastrarAnimal(dto: CertificadoDTO) {
    const animal = await this.certificadoRepository.create({
      data: {
        ...dto,
      },
    });

    return animal;
  }
}
