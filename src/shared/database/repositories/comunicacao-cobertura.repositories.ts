import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoCoberturaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoCoberturaCreateArgs) {
    return this.prismaService.comunicacaoCobertura.create(createDto);
  }
}
