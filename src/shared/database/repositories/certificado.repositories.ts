import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CertificadoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CertificadoCreateArgs) {
    return this.prismaService.certificado.create(createDto);
  }

  findMany() {
    return this.prismaService.certificado.findMany();
  }

  findUnique(findUniqueCertificado: Prisma.CertificadoFindUniqueArgs) {
    return this.prismaService.certificado.findUnique({ ...findUniqueCertificado });
  }

  update(updateCertificado: Prisma.CertificadoUpdateArgs) {
    return this.prismaService.certificado.update({ ...updateCertificado });
  }

  delete(deleteCertificado: Prisma.CertificadoDeleteArgs) {
    return this.prismaService.certificado.delete({ ...deleteCertificado });
  }
}
