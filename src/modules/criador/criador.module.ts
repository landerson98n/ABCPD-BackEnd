import { Module } from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorController } from './criador.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  providers: [CriadorService],
  controllers: [CriadorController],
  exports: [CriadorService],
})
export class CriadorModule {}
