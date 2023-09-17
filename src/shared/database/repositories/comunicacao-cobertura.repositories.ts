import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoCoberturaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoCoberturaCreateArgs) {
    return this.prismaService.comunicacaoCobertura.create(createDto);
  }

  findMany(findManyCobertura: Prisma.ComunicacaoCoberturaFindManyArgs) {
    return this.prismaService.comunicacaoCobertura.findMany(findManyCobertura);
  }

  findUnique(findUniqueCobertura: Prisma.ComunicacaoCoberturaFindUniqueArgs) {
    return this.prismaService.comunicacaoCobertura.findUnique({ ...findUniqueCobertura });
  }

  findFirst(findFirstCobertura: Prisma.ComunicacaoCoberturaFindFirstArgs) {
    return this.prismaService.comunicacaoCobertura.findFirst({ ...findFirstCobertura });
  }

  update(UpdateCobertura: Prisma.ComunicacaoCoberturaUpdateArgs) {
    return this.prismaService.comunicacaoCobertura.update({ ...UpdateCobertura });
  }

  delete(deleteCoberturaId: Prisma.ComunicacaoCoberturaDeleteArgs) {
    return this.prismaService.comunicacaoCobertura.delete({ ...deleteCoberturaId });
  }
}
