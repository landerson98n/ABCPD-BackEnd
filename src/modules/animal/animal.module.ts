import { Module } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
  providers: [AnimalService],
  controllers: [AnimalController],
  imports:[DatabaseModule]
})
export class AnimalModule {}
