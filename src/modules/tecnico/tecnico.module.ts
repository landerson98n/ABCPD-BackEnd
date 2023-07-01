import { Module } from '@nestjs/common';
import { TecnicoController } from './tecnico.controller';
import { TecnicoService } from './tecnico.service';

@Module({
    controllers:[TecnicoController],
    providers: [TecnicoService]
})
export class TecnicoModule {}
