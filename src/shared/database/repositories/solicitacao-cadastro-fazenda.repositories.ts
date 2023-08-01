import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoCadatroFazendaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoCadastroFazendaCreateArgs) {
    return this.prismaService.solicitacaoCadastroFazenda.create(createDto);
  }

  findMany() {
    return this.prismaService.solicitacaoCadastroFazenda.findMany();
  }

  findUnique(findUniqueSolicitacaoCadastroFazenda: Prisma.SolicitacaoCadastroFazendaFindUniqueArgs) {
    return this.prismaService.solicitacaoCadastroFazenda.findUnique({ ...findUniqueSolicitacaoCadastroFazenda });
  }

  update(updateSolicitacaoCadastroFazenda: Prisma.SolicitacaoCadastroFazendaUpdateArgs) {
    return this.prismaService.solicitacaoCadastroFazenda.update({ ...updateSolicitacaoCadastroFazenda });
  }

  delete(deleteSolicitacaoCadastroFazenda: Prisma.SolicitacaoCadastroFazendaDeleteArgs) {
    return this.prismaService.solicitacaoCadastroFazenda.delete({ ...deleteSolicitacaoCadastroFazenda });
  }
}
