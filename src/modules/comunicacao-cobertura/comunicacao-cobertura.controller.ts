import { Controller, Body, Post } from '@nestjs/common';
import { ComunicacaoCoberturaService } from './comunicacao-cobertura.service';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';

@Controller('comunicacao-cobertura')
export class ComunicacaoCoberturaController {
  constructor(
    private readonly comunicacaoCoberturaService: ComunicacaoCoberturaService,
  ) {}

  @Post('cadastrarCobertura')
  cadastrarAnimal(@Body() dto: ComunicacaoCoberturaDto) {
    return this.comunicacaoCoberturaService.cadastrarCobertura(dto);
  }
}
