import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';

@Controller('comunicacao-nascimento')
export class ComunicacaoNascimentoController {
  constructor(private readonly comunicacaoNascimentoService: ComunicacaoNascimentoService) {}

  @Post('cadastrar-nascimento')
  create(@Body() createComunicacaoNascimentoDto: ComunicacaoNascimentoDto) {
    return this.comunicacaoNascimentoService.comunicacaoNascimento(createComunicacaoNascimentoDto);
  }

  @Get('get-comunicacoes-nascimentos')
  getAnimais() {
    return this.comunicacaoNascimentoService.getComunicacaoNascimento();
  }

  @Get('get-comunicacoes-nascimentos/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.getComunicacaoNascimentoById(id);
  }

  @Post('update-comunicacoes-nascimentos/:id')
  updateAnimal(
    @Body()
    dto: ComunicacaoNascimentoDto,
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.updateComunicacaoNascimentoId(dto, id);
  }

  @Delete('delete-comunicacoes-nascimentos/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.deleteComunicacaoNascimentoId(id);
  }
}
