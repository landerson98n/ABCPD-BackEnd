import { Injectable } from '@nestjs/common';
import { CertificadoDTO } from './dto/certificado.dto';
import { CertificadoRepository } from 'src/shared/database/repositories/certificado.repositories';

@Injectable()
export class CertificadoService {
  constructor(private certificadoRepository: CertificadoRepository) {}

  async cadastrarCertificado(dto: CertificadoDTO) {
    const certificado = await this.certificadoRepository.create({
      data: {
        ...dto,
      },
    });

    return certificado;
  }

  async getCertificado() {
    const certificados = await this.certificadoRepository.findMany();

    return certificados;
  }

  async getCertificadoBydId(id: string) {
    const certificado = await this.certificadoRepository.findUnique({
      where: {
        id,
      },
    });

    return certificado;
  }

  async updateCertificado(dto: CertificadoDTO, id: string) {
    const certificado = await this.certificadoRepository.update({
      where: {
        id,
      },
      data: {
        ...dto,
      },
    });

    return certificado;
  }

  async deleteCertificado(id: string) {
    const certificado = await this.certificadoRepository.delete({
      where: {
        id,
      },
    });

    return certificado;
  }
}
