import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { DatabaseModule } from 'src/shared/database/database.module';
import { UserModule } from '../user/user.module';
import { CriadorModule } from '../criador/criador.module';
import { FazendaModule } from '../fazenda/fazenda.module';
import { RebanhoModule } from '../rebanho/rebanho.module';

@Module({
  providers: [AnimalService],
  controllers: [AnimalController],
  imports: [DatabaseModule, UserModule, CriadorModule, FazendaModule, RebanhoModule],
  exports: [AnimalService],
})
export class AnimalModule {}
