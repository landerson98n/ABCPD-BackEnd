import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class FazendaRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.FazendaCreateArgs) {
    return this.prismaService.fazenda.create(createDto);
  }
}
