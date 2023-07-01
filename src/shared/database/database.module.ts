import {
  Global,
  Module,
} from '@nestjs/common';
import { AnimalRepository } from './repositories/animal.repositories';
import { CriadorRepository } from './repositories/criador.repositories';
import { PrismaService } from './prisma.service';
import { FazendaRepository } from './repositories/fazenda.repositories';
import { UserRepository } from './repositories/user.repositories';
import { RebanhoRepository } from './repositories/rebanho.repositories';
import { TecnicoRepository } from './repositories/tecnico.repositories';
import { SuperintendenteRepository } from './repositories/superintendente.repositories';
@Global()
@Module({
  controllers: [],
  providers: [
    AnimalRepository,
    CriadorRepository,
    FazendaRepository,
    PrismaService,
    UserRepository,
    RebanhoRepository,
    TecnicoRepository,
    SuperintendenteRepository,
  ],
  exports: [
    AnimalRepository,
    CriadorRepository,
    FazendaRepository,
    UserRepository,
    RebanhoRepository,
    TecnicoRepository,
    SuperintendenteRepository,
  ],
})
export class DatabaseModule {}
