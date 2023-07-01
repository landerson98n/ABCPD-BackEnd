import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TecnicoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TecnicoCreateArgs) {
    return this.prismaService.tecnico.create(createDto);
  }
}
