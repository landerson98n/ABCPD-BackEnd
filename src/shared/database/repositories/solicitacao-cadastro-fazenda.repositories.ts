import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoCadatroFazendaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoCadastroFazendaCreateArgs) {
    return this.prismaService.solicitacaoCadastroFazenda.create(createDto);
  }
}
