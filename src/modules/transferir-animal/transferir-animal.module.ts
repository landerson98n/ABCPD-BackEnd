import { Module } from '@nestjs/common';
import { TransferirAnimalService } from './transferir-animal.service';
import { TransferirAnimalController } from './transferir-animal.controller';

@Module({
  controllers: [TransferirAnimalController],
  providers: [TransferirAnimalService],
})
export class TransferirAnimalModule {}
