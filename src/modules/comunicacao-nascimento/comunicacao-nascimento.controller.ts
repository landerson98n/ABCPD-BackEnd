import { Controller, Post, Body } from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';

@Controller('comunicacao-nascimento')
export class ComunicacaoNascimentoController {
  constructor(
    private readonly comunicacaoNascimentoService: ComunicacaoNascimentoService,
  ) {}

  @Post('cadastrarAnimal')
  create(@Body() createComunicacaoNascimentoDto: ComunicacaoNascimentoDto) {
    return this.comunicacaoNascimentoService.comunicacaoNascimento(
      createComunicacaoNascimentoDto,
    );
  }
}
