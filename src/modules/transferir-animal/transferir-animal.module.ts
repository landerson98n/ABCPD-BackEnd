import { Module } from '@nestjs/common';
import { TransferirAnimalService } from './transferir-animal.service';
import { TransferirAnimalController } from './transferir-animal.controller';
import { UserModule } from '../user/user.module';
import { CriadorModule } from '../criador/criador.module';
import { AnimalModule } from '../animal/animal.module';
import { FazendaModule } from '../fazenda/fazenda.module';

@Module({
  controllers: [TransferirAnimalController],
  providers: [TransferirAnimalService],
  imports: [UserModule, CriadorModule, AnimalModule, FazendaModule],
})
export class TransferirAnimalModule {}
