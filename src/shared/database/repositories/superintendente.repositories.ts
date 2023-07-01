import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SuperintendenteRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SuperintendeteCreateArgs) {
    return this.prismaService.superintendete.create(createDto);
  }

  
  findMany(){
    return this.prismaService.superintendete.findMany()
  }

  findUnique(findUniqueSuperintendete: Prisma.SuperintendeteFindUniqueArgs){
      return this.prismaService.superintendete.findUnique({...findUniqueSuperintendete})
  }

  update(updateSuperintendete: Prisma.SuperintendeteUpdateArgs){
    return this.prismaService.superintendete.update({...updateSuperintendete})
  }

  delete(deleteSuperintendete: Prisma.SuperintendeteDeleteArgs){
    return this.prismaService.superintendete.delete({...deleteSuperintendete})
  }
}
