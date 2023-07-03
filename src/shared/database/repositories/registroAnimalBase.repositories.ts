import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RegistroAnimalBaseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.RegistroAnimalBaseCreateArgs) {
    return this.prismaService.registroAnimalBase.create(createDto);
  }
}
