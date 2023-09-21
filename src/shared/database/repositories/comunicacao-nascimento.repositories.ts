import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoNascimentoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoNascimentoCreateArgs) {
    return this.prismaService.comunicacaoNascimento.create(createDto);
  }

  findMany(findManyComunicacaoNascimento: Prisma.ComunicacaoNascimentoFindManyArgs) {
    return this.prismaService.comunicacaoNascimento.findMany(findManyComunicacaoNascimento);
  }

  findUnique(findUniqueComunicacaoNascimento: Prisma.ComunicacaoNascimentoFindUniqueArgs) {
    return this.prismaService.comunicacaoNascimento.findUnique({ ...findUniqueComunicacaoNascimento });
  }

  update(UpdateNascimento: Prisma.ComunicacaoNascimentoUpdateArgs) {
    return this.prismaService.comunicacaoNascimento.update({ ...UpdateNascimento });
  }

  delete(deleteNascimentoId: Prisma.ComunicacaoNascimentoDeleteArgs) {
    return this.prismaService.comunicacaoNascimento.delete({ ...deleteNascimentoId });
  }
}
