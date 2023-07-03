import { Global, Module } from '@nestjs/common';
import { AnimalRepository } from './repositories/animal.repositories';
import { CriadorRepository } from './repositories/criador.repositories';
import { PrismaService } from './prisma.service';
import { FazendaRepository } from './repositories/fazenda.repositories';
import { RebanhoRepository } from './repositories/rebanho.repositories';
import { SuperintendenteRepository } from './repositories/superintendente.repositories';
import { UserRepository } from './repositories/user.repositories';
import { TecnicoRepository } from './repositories/tecnico.repositories';
import { ComunicacaoCoberturaRepository } from './repositories/comunicacao-cobertura.repositories';
import { ComunicacaoNascimentoRepository } from './repositories/comunicacao-nascimento.repositories';
import { ComunicacaoObitoRepository } from './repositories/comunicacao-obito.repositories';
import { TransferirAnimalRepository } from './repositories/transferir-animal.repositories copy';
import { SolicitacaoRegistroAnimalBaseRepository } from './repositories/solicitacao-registro-animal-base.repositories';
import { RegistroAnimalBaseRepository } from './repositories/registroAnimalBase.repositories';
import { SolicitacaoCadatroCriadorRepository } from './repositories/solicitacao-cadastro-criador.repositories';
import { SolicitacaoCadatroFazendaRepository } from './repositories/solicitacao-cadastro-fazenda.repositories';
import { CertificadoRepository } from './repositories/certificado.repositories';
import { MatrixRepository } from './repositories/matrix.repositories';

@Global()
@Module({
  controllers: [],
  providers: [
    AnimalRepository,
    CriadorRepository,
    FazendaRepository,
    RebanhoRepository,
    SuperintendenteRepository,
    UserRepository,
    TecnicoRepository,
    ComunicacaoCoberturaRepository,
    ComunicacaoNascimentoRepository,
    ComunicacaoObitoRepository,
    TransferirAnimalRepository,
    SolicitacaoRegistroAnimalBaseRepository,
    RegistroAnimalBaseRepository,
    SolicitacaoCadatroCriadorRepository,
    SolicitacaoCadatroFazendaRepository,
    CertificadoRepository,
    MatrixRepository,
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
    RebanhoRepository,
    SuperintendenteRepository,
    TecnicoRepository,
    UserRepository,
    ComunicacaoCoberturaRepository,
    ComunicacaoNascimentoRepository,
    ComunicacaoObitoRepository,
    TransferirAnimalRepository,
    SolicitacaoRegistroAnimalBaseRepository,
    RegistroAnimalBaseRepository,
    SolicitacaoCadatroCriadorRepository,
    SolicitacaoCadatroFazendaRepository,
    CertificadoRepository,
    MatrixRepository,
  ],
})
export class DatabaseModule {}
