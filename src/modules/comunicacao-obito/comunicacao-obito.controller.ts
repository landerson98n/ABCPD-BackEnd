import { Controller, Post, Body, Delete, Param, Get } from '@nestjs/common';
import { ComunicacaoObitoService } from './comunicacao-obito.service';
import { ComunicacaoObitoDto } from './dto/comunicacaoObito.dto';

@Controller('comunicacao-obito')
export class ComunicacaoObitoController {
  constructor(private readonly comunicacaoObitoService: ComunicacaoObitoService) {}

  @Post('cadastrarObito')
  cadastrarObito(@Body() dto: ComunicacaoObitoDto) {
    return this.comunicacaoObitoService.cadastrarObito(dto);
  }

  @Get('get-obitos')
  getAnimais() {
    return this.comunicacaoObitoService.getObitos();
  }

  @Get('get-obito-byid/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoObitoService.getObitoBydId(id);
  }

  @Post('update-obito/:id')
  updateAnimal(
    @Body()
    dto: ComunicacaoObitoDto,
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoObitoService.updateObito(dto, id);
  }

  @Delete('delete-obito/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoObitoService.deleteObito(id);
  }
}
