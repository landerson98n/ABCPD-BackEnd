import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TecnicoRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.TecnicoCreateArgs) {
    return this.prismaService.tecnico.create(createDto);
  }

  findMany() {
    return this.prismaService.tecnico.findMany();
  }

  findUnique(findUniqueTecnico: Prisma.TecnicoFindUniqueArgs) {
    return this.prismaService.tecnico.findUnique({ ...findUniqueTecnico });
  }

  update(updateTecnico: Prisma.TecnicoUpdateArgs) {
    return this.prismaService.tecnico.update({ ...updateTecnico });
  }

  delete(deleteTecnico: Prisma.TecnicoDeleteArgs) {
    return this.prismaService.tecnico.delete({ ...deleteTecnico });
  }
}
