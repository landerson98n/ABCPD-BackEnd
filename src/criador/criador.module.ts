import { Module } from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorController } from './criador.controller';

@Module({
  providers: [CriadorService],
  controllers: [CriadorController]
})
export class CriadorModule {}
