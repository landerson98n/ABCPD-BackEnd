import { Module } from '@nestjs/common';
import { AnimalModule } from './modules/animal/animal.module';
import { FazendaModule } from './modules/fazenda/fazenda.module';
import { CriadorModule } from './modules/criador/criador.module';
import { UserModule } from './modules/user/user.module';
import { RebanhoModule } from './modules/rebanho/rebanho.module';
import { TecnicoModule } from './modules/tecnico/tecnico.module';
import { SuperintendenteModule } from './modules/superintendente/superintendente.module';
import { ComunicacaoNascimentoModule } from './modules/comunicacao-nascimento/comunicacao-nascimento.module';
import { ComunicacaoCoberturaModule } from './modules/comunicacao-cobertura/comunicacao-cobertura.module';
import { ComunicacaoObitoModule } from './modules/comunicacao-obito/comunicacao-obito.module';
import { TransferirAnimalModule } from './modules/transferir-animal/transferir-animal.module';
import { SolicitacaoRegistroAnimalBaseModule } from './modules/solicitacao-registro-animal-base/solicitacao-registro-animal-base.module';
import { SolicitacaoCadastroFazendaModule } from './modules/solicitacao-cadastro-fazenda/solicitacao-cadastro-fazenda.module';
import { CertificadoModule } from './modules/certificado/certificado.module';
import { MatrixModule } from './modules/matrix/matrix.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';

@Module({
  imports: [
    AnimalModule,
    FazendaModule,
    CriadorModule,
    UserModule,
    RebanhoModule,
    TecnicoModule,
    SuperintendenteModule,
    ComunicacaoNascimentoModule,
    ComunicacaoCoberturaModule,
    ComunicacaoObitoModule,
    TransferirAnimalModule,
    SolicitacaoRegistroAnimalBaseModule,
    SolicitacaoCadastroFazendaModule,
    CertificadoModule,
    MatrixModule,
    AuthModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
