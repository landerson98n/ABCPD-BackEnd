import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransferirAnimalRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TransferirAnimalCreateArgs) {
    return this.prismaService.transferirAnimal.create(createDto);
  }
}
