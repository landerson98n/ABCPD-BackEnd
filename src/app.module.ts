import { Module } from '@nestjs/common';
import { AnimalModule } from './modules/animal/animal.module';
import { FazendaModule } from './modules/fazenda/fazenda.module';
import { CriadorModule } from './modules/criador/criador.module';
import { UserModule } from './modules/user/user.module';
import { RebanhoModule } from './modules/rebanho/rebanho.module';
import { TecnicoModule } from './modules/tecnico/tecnico.module';
import { SuperintendenteModule } from './modules/superintendente/superintendente.module';

@Module({
  imports: [
    AnimalModule,
    FazendaModule,
    CriadorModule,
    UserModule,
    RebanhoModule,
    TecnicoModule,
    SuperintendenteModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
