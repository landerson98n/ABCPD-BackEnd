import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoNascimentoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoNascimentoCreateArgs) {
    return this.prismaService.comunicacaoNascimento.create(createDto);
  }
}
