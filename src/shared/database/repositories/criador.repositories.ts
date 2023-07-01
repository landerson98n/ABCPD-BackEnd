import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CriadorRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.CriadorCreateArgs) {
    return this.prismaService.criador.create(createDto);
  }
}
