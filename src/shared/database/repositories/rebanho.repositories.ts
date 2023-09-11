import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RebanhoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.RebanhoCreateArgs) {
    return this.prismaService.rebanho.create(createDto);
  }

  findMany() {
    return this.prismaService.rebanho.findMany();
  }

  findUnique(findUniqueRebanho: Prisma.RebanhoFindUniqueArgs) {
    return this.prismaService.rebanho.findUnique({ ...findUniqueRebanho });
  }

  findFirst(findFirstRebanho: Prisma.RebanhoFindFirstArgs) {
    return this.prismaService.rebanho.findFirst({ ...findFirstRebanho });
  }

  update(updateRebanho: Prisma.RebanhoUpdateArgs) {
    return this.prismaService.rebanho.update({ ...updateRebanho });
  }

  delete(deleteRebanho: Prisma.RebanhoDeleteArgs) {
    return this.prismaService.rebanho.delete({ ...deleteRebanho });
  }
}
