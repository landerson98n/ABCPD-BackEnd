import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CriadorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CriadorCreateArgs) {
    return this.prismaService.criador.create(createDto);
  }

  findMany(findManyCriador: Prisma.CriadorFindManyArgs) {
    return this.prismaService.criador.findMany(findManyCriador);
  }

  findUnique(findUniqueCriador: Prisma.CriadorFindUniqueArgs) {
    return this.prismaService.criador.findUnique({ ...findUniqueCriador });
  }

  findFirst(findFirstCriador: Prisma.CriadorFindFirstArgs) {
    return this.prismaService.criador.findFirst({ ...findFirstCriador });
  }

  update(updateCriador: Prisma.CriadorUpdateArgs) {
    return this.prismaService.criador.update({ ...updateCriador });
  }

  delete(deleteCriador: Prisma.CriadorDeleteArgs) {
    return this.prismaService.criador.delete({ ...deleteCriador });
  }
}
