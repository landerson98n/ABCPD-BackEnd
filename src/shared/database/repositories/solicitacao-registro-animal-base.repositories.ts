import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoRegistroAnimalBaseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoRegistroAnimalBaseCreateArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.create(createDto);
  }
}
