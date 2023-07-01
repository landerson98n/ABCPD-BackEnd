import { Global, Module } from '@nestjs/common';
import { AnimalRepository } from './repositories/animal.repositories';
import { CriadorRepository } from './repositories/criador.repositories';
import { PrismaService } from './prisma.service';
import { FazendaRepository } from './repositories/fazenda.repositories';

@Global()
@Module({
  controllers: [],
  providers: [
    AnimalRepository,
    CriadorRepository,
    FazendaRepository,
    PrismaService,
  ],
  exports: [AnimalRepository, CriadorRepository],
})
export class DatabaseModule {}
