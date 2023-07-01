import { Module } from '@nestjs/common';
import { FazendaController } from './fazenda.controller';
import { FazendaService } from './fazenda.service';
import { DatabaseModule } from 'src/shared/database/database.module';


@Module({
  controllers: [FazendaController],
  providers: [FazendaService],
  imports: [DatabaseModule]
})
export class FazendaModule {}
