import { Controller, Post, Body } from '@nestjs/common';
import { ComunicacaoObitoService } from './comunicacao-obito.service';
import { ComunicacaoObitoDto } from './dto/comunicacaoObito.dto';

@Controller('comunicacao-obito')
export class ComunicacaoObitoController {
  constructor(
    private readonly comunicacaoObitoService: ComunicacaoObitoService,
  ) {}

  @Post('cadastrarObito')
  cadastrarAnimal(@Body() dto: ComunicacaoObitoDto) {
    return this.comunicacaoObitoService.cadastrarAnimal(dto);
  }
}
