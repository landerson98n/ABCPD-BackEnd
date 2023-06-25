import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AnimalRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AnimalCreateArgs) {
    return this.prismaService.animal.create(createDto);
  }
}
