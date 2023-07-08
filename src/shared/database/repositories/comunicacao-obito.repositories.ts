import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoObitoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoObitoCreateArgs) {
    return this.prismaService.comunicacaoObito.create(createDto);
  }

  findMany() {
    return this.prismaService.comunicacaoObito.findMany();
  }

  findUnique(findUniqueComunicacaoObito: Prisma.ComunicacaoObitoFindUniqueArgs) {
    return this.prismaService.comunicacaoObito.findUnique({ ...findUniqueComunicacaoObito });
  }

  update(updateComunicacaoObito: Prisma.ComunicacaoObitoUpdateArgs) {
    return this.prismaService.comunicacaoObito.update({ ...updateComunicacaoObito });
  }

  delete(deleteComunicacaoObito: Prisma.ComunicacaoObitoDeleteArgs) {
    return this.prismaService.comunicacaoObito.delete({ ...deleteComunicacaoObito });
  }
}
