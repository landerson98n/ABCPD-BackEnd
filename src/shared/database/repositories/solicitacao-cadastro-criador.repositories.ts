import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoCadatroCriadorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoCadastroCriadorCreateArgs) {
    return this.prismaService.solicitacaoCadastroCriador.create(createDto);
  }

  findMany() {
    return this.prismaService.solicitacaoCadastroCriador.findMany();
  }

  findUnique(findUniquesolicitacaoCadastroCriador: Prisma.SolicitacaoCadastroCriadorFindUniqueArgs) {
    return this.prismaService.solicitacaoCadastroCriador.findUnique({ ...findUniquesolicitacaoCadastroCriador });
  }

  update(updatesolicitacaoCadastroCriador: Prisma.SolicitacaoCadastroCriadorUpdateArgs) {
    return this.prismaService.solicitacaoCadastroCriador.update({ ...updatesolicitacaoCadastroCriador });
  }

  delete(deletesolicitacaoCadastroCriador: Prisma.SolicitacaoCadastroCriadorDeleteArgs) {
    return this.prismaService.solicitacaoCadastroCriador.delete({ ...deletesolicitacaoCadastroCriador });
  }
}
