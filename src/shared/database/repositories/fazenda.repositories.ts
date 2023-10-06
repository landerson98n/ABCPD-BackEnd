import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FazendaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.FazendaCreateArgs) {
    return this.prismaService.fazenda.create(createDto);
  }

  findMany(findManyFazenda: Prisma.FazendaFindManyArgs) {
    return this.prismaService.fazenda.findMany({...findManyFazenda});
  }
  

  findUnique(findUniqueFazenda: Prisma.FazendaFindUniqueArgs) {
    return this.prismaService.fazenda.findUnique({ ...findUniqueFazenda });
  }

  update(updateFazenda: Prisma.FazendaUpdateArgs) {
    return this.prismaService.fazenda.update({ ...updateFazenda });
  }

  delete(deleteFazenda: Prisma.FazendaDeleteArgs) {
    return this.prismaService.fazenda.delete({ ...deleteFazenda });
  }
}
