import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class AnimalRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.AnimalCreateArgs) {
    return this.prismaService.animal.create(createDto);
  }

  findMany(){
    return this.prismaService.animal.findMany()
  }

  findUnique(findUniqueAnimal: Prisma.AnimalFindUniqueArgs){
      return this.prismaService.animal.findUnique({...findUniqueAnimal})
  }

  update(updateAnimal: Prisma.AnimalUpdateArgs){
    return this.prismaService.animal.update({...updateAnimal})
  }

  delete(deleteAnimal: Prisma.AnimalDeleteArgs){
    return this.prismaService.animal.delete({...deleteAnimal})
  }
}
