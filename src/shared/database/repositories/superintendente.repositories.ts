import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SuperintendenteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SuperintendeteCreateArgs) {
    return this.prismaService.superintendete.create(createDto);
  }
}
