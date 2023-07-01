import { Controller, Body, Post } from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorDTO } from './dto/criador.dto';

@Controller('criador')
export class CriadorController {
    constructor(private criadorService: CriadorService){}

    @Post('cadastrarCriador')
    cadastrarCriador(@Body() dto: CriadorDTO){
        return this.criadorService.cadastrarCriador(dto)
    }
}
