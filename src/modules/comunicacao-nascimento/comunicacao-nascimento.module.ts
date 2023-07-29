import { Module } from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoController } from './comunicacao-nascimento.controller';
import { UserModule } from '../user/user.module';
import { DatabaseModule } from 'src/shared/database/database.module';
import { CriadorModule } from '../criador/criador.module';
import { FazendaModule } from '../fazenda/fazenda.module';
import { TecnicoModule } from '../tecnico/tecnico.module';
import { AnimalModule } from '../animal/animal.module';
import { ComunicacaoCoberturaModule } from '../comunicacao-cobertura/comunicacao-cobertura.module';
import { MatrixModule } from '../matrix/matrix.module';

@Module({
  controllers: [ComunicacaoNascimentoController],
  providers: [ComunicacaoNascimentoService],
  imports: [
    DatabaseModule,
    UserModule,
    CriadorModule,
    FazendaModule,
    AnimalModule,
    TecnicoModule,
    ComunicacaoCoberturaModule,
    MatrixModule,
  ],
})
export class ComunicacaoNascimentoModule {}
