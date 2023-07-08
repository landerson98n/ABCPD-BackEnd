import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RegistroAnimalBaseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.RegistroAnimalBaseCreateArgs) {
    return this.prismaService.registroAnimalBase.create(createDto);
  }

  findMany() {
    return this.prismaService.registroAnimalBase.findMany();
  }

  findUnique(findUniqueRegistroAnimalBase: Prisma.RegistroAnimalBaseFindUniqueArgs) {
    return this.prismaService.registroAnimalBase.findUnique({ ...findUniqueRegistroAnimalBase });
  }

  update(updateRegistroAnimalBase: Prisma.RegistroAnimalBaseUpdateArgs) {
    return this.prismaService.registroAnimalBase.update({ ...updateRegistroAnimalBase });
  }

  delete(deleteRegistroAnimalBase: Prisma.RegistroAnimalBaseDeleteArgs) {
    return this.prismaService.registroAnimalBase.delete({ ...deleteRegistroAnimalBase });
  }
}
