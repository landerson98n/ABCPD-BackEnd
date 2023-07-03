import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoCadatroCriadorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoCadastroCriadorCreateArgs) {
    return this.prismaService.solicitacaoCadastroCriador.create(createDto);
  }
}
