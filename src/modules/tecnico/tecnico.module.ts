import { Module } from '@nestjs/common';
import { TecnicoController } from './tecnico.controller';
import { TecnicoService } from './tecnico.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TecnicoController],
  providers: [TecnicoService],
  exports: [TecnicoService],
})
export class TecnicoModule {}
