import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RebanhoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.RebanhoCreateArgs) {
    return this.prismaService.rebanho.create(createDto);
  }
}
