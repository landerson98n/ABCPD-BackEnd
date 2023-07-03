import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatrixRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.MatrixCreateArgs) {
    return this.prismaService.matrix.create(createDto);
  }
}
