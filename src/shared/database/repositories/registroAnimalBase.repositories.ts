import { Injectable } from '@nestjs/common';
import { type Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';

@Injectable()
export class RegistroAnimalBaseRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(createDto: Prisma.SolicitacaoRegistroAnimalBaseCreateArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.create(createDto);
  }

  findMany() {
    return this.prismaService.solicitacaoRegistroAnimalBase.findMany();
  }

  findUnique(findUniqueRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseFindUniqueArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.findUnique({ ...findUniqueRegistroAnimalBase });
  }

  update(updateRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseUpdateArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.update({ ...updateRegistroAnimalBase });
  }

  delete(deleteRegistroAnimalBase: Prisma.SolicitacaoRegistroAnimalBaseDeleteArgs) {
    return this.prismaService.solicitacaoRegistroAnimalBase.delete({ ...deleteRegistroAnimalBase });
  }
}
