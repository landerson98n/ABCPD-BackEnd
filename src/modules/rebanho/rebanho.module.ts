import { Module } from '@nestjs/common';
import { RebanhoController } from './rebanho.controller';
import { RebanhoService } from './rebanho.service';
import { FazendaModule } from '../fazenda/fazenda.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [RebanhoController],
  providers: [RebanhoService],
  imports: [FazendaModule, UserModule],
  exports: [RebanhoService],
})
export class RebanhoModule {}
