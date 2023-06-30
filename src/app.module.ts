import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalService } from './animal/animal.service';
import { PrismaModule } from './prisma/prisma.module';
import { AnimalModule } from './animal/animal.module';
import { PrismaService } from './prisma/prisma.service';
import { AnimalController } from './animal/animal.controller';
import { FazendaController } from './fazenda/fazenda.controller';
import { FazendaService } from './fazenda/fazenda.service';
import { FazendaModule } from './fazenda/fazenda.module';
import { CriadorModule } from './criador/criador.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { RebanhoService } from './rebanho/rebanho.service';
import { RebanhoController } from './rebanho/rebanho.controller';
import { RebanhoModule } from './rebanho/rebanho.module';
import { TecnicoService } from './tecnico/tecnico.service';
import { TecnicoController } from './tecnico/tecnico.controller';
import { TecnicoModule } from './tecnico/tecnico.module';
import { SuperintendenteService } from './superintendente/superintendente.service';
import { SuperintendenteModule } from './superintendente/superintendente.module';


@Module({
  imports: [PrismaModule, AnimalModule, FazendaModule, CriadorModule, UserModule, RebanhoModule, TecnicoModule, SuperintendenteModule],
  controllers: [AppController, AnimalController, FazendaController, UserController, RebanhoController, TecnicoController],
  providers: [AppService, AnimalService, PrismaService, FazendaService, UserService, RebanhoService, TecnicoService, SuperintendenteService],
})
export class AppModule {}
