import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TransferirAnimalRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TransferirAnimalCreateArgs) {
    return this.prismaService.transferirAnimal.create(createDto);
  }

  findMany() {
    return this.prismaService.transferirAnimal.findMany();
  }

  findUnique(findUniqueAnimal: Prisma.TransferirAnimalFindUniqueArgs) {
    return this.prismaService.transferirAnimal.findUnique({ ...findUniqueAnimal });
  }

  update(updateAnimal: Prisma.TransferirAnimalUpdateArgs) {
    return this.prismaService.transferirAnimal.update({ ...updateAnimal });
  }

  delete(deleteAnimal: Prisma.TransferirAnimalDeleteArgs) {
    return this.prismaService.transferirAnimal.delete({ ...deleteAnimal });
  }
}
