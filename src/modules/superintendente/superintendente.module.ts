import { Module } from '@nestjs/common';
import { SuperintendenteController } from './superintendente.controller';
import { SuperintendenteService } from './superintendente.service';

@Module({
  controllers: [SuperintendenteController],
  providers: [SuperintendenteService]
})
export class SuperintendenteModule {}
