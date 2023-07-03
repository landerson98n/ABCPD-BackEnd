import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CertificadoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CertificadoCreateArgs) {
    return this.prismaService.certificado.create(createDto);
  }
}
