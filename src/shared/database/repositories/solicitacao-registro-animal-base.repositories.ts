import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class SolicitacaoRegistroAnimalBaseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoRegistroAnimalBaseCreateArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.create(createDto);
  }

  findMany() {
    return this.prismaService.solicitacaoRegistroAnimalBase.findMany();
  }

  findUnique(findUniqueSolicitacaoRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseFindUniqueArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.findUnique({ ...findUniqueSolicitacaoRegistroAnimalBase });
  }

  update(updateSolicitacaoRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseUpdateArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.update({ ...updateSolicitacaoRegistroAnimalBase });
  }

  delete(deleteSolicitacaoRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseDeleteArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.delete({ ...deleteSolicitacaoRegistroAnimalBase });
  }
}
