import { Module } from '@nestjs/common';
import { RegistroAnimalBaseService } from './registro-animal-base.service';
import { RegistroAnimalBaseController } from './registro-animal-base.controller';

@Module({
  controllers: [RegistroAnimalBaseController],
  providers: [RegistroAnimalBaseService],
})
export class RegistroAnimalBaseModule {}
