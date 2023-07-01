import { Controller, Post, Body } from '@nestjs/common';
import { SuperintendenteService } from './superintendente.service';
import { SuperintendenteDTO } from './dto/superintendente.dto';

@Controller('superintendente')
export class SuperintendenteController {
  constructor(private superintendenteService: SuperintendenteService) {}

  @Post('cadastrarSuperintendente')
  cadastrarSuperintendente(@Body() dto: SuperintendenteDTO) {
    return this.superintendenteService.cadastrarSuperintendente(dto);
  }
}
