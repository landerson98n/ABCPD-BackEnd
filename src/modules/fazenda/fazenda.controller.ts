import { Controller, Post, Body } from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaDTO } from './dto/fazenda.dto';

@Controller('fazenda')
export class FazendaController {
  constructor(private fazendaService: FazendaService) {}

  @Post('cadastrarFazenda')
  cadastrarFazenda(@Body() dto: FazendaDTO) {
    return this.fazendaService.cadastrarFazenda(dto);
  }
}
