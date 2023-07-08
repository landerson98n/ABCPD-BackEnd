import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MatrixRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.MatrixCreateArgs) {
    return this.prismaService.matrix.create(createDto);
  }

  findMany() {
    return this.prismaService.matrix.findMany();
  }

  findUnique(findUniqueMatrix: Prisma.MatrixFindUniqueArgs) {
    return this.prismaService.matrix.findUnique({ ...findUniqueMatrix });
  }

  update(updateMatrix: Prisma.MatrixUpdateArgs) {
    return this.prismaService.matrix.update({ ...updateMatrix });
  }

  delete(deleteMatrix: Prisma.MatrixDeleteArgs) {
    return this.prismaService.matrix.delete({ ...deleteMatrix });
  }
}
