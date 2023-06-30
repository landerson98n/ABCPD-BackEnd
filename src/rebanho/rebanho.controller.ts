import { Controller, Post, Body } from '@nestjs/common';
import { RebanhoService } from './rebanho.service';
import { RebanhoDTO } from './dto';

@Controller('rebanho')
export class RebanhoController {
    constructor(private rebanhoService: RebanhoService){}

    @Post('cadastrarRebanho')
    cadastrarRebanho(@Body() dto: RebanhoDTO){
        return this.rebanhoService.cadastrarRebanho(dto)
    }
}
