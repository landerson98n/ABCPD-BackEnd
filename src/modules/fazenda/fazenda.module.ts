import { Module } from '@nestjs/common';
import { FazendaController } from './fazenda.controller';
import { FazendaService } from './fazenda.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [FazendaController],
  providers: [FazendaService],
  exports: [FazendaService],
})
export class FazendaModule {}
