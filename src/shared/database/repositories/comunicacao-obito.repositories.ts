import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class ComunicacaoObitoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.ComunicacaoObitoCreateArgs) {
    return this.prismaService.comunicacaoObito.create(createDto);
  }
}
