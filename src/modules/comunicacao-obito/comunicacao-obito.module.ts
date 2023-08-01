import { Module } from '@nestjs/common';
import { ComunicacaoObitoService } from './comunicacao-obito.service';
import { ComunicacaoObitoController } from './comunicacao-obito.controller';
import { AnimalModule } from '../animal/animal.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [ComunicacaoObitoController],
  providers: [ComunicacaoObitoService],
  imports: [AnimalModule, UserModule],
})
export class ComunicacaoObitoModule {}
