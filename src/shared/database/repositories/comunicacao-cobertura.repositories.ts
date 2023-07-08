import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoCoberturaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoCoberturaCreateArgs) {
    return this.prismaService.comunicacaoCobertura.create(createDto);
  }

  findMany() {
    return this.prismaService.comunicacaoCobertura.findMany();
  }

  findUnique(findUniqueCobertura: Prisma.ComunicacaoCoberturaFindUniqueArgs) {
    return this.prismaService.comunicacaoCobertura.findUnique({ ...findUniqueCobertura });
  }

  update(UpdateCobertura: Prisma.ComunicacaoCoberturaUpdateArgs) {
    return this.prismaService.comunicacaoCobertura.update({ ...UpdateCobertura });
  }

  delete(deleteCoberturaId: Prisma.ComunicacaoCoberturaDeleteArgs) {
    return this.prismaService.comunicacaoCobertura.delete({ ...deleteCoberturaId });
  }
}
