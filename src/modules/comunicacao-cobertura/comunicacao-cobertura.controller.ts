import { Controller, Body, Post, Get, Param, Delete } from '@nestjs/common';
import { ComunicacaoCoberturaService } from './comunicacao-cobertura.service';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';

@Controller('comunicacao-cobertura')
export class ComunicacaoCoberturaController {
  constructor(private readonly comunicacaoCoberturaService: ComunicacaoCoberturaService) {}

  @Post('cadastrarCobertura')
  cadastrarAnimal(@Body() dto: ComunicacaoCoberturaDto) {
    return this.comunicacaoCoberturaService.cadastrarCobertura(dto);
  }

  @Get('getCoberturas')
  getAnimais() {
    return this.comunicacaoCoberturaService.getCoberturas();
  }

  @Get('getAnimalById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoCoberturaService.getCoberturaById(id);
  }

  @Post('updateCobertura/:id')
  updateAnimal(
    @Body()
    dto: ComunicacaoCoberturaDto,
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoCoberturaService.updateCoberturas(dto, id);
  }

  @Delete('deleteCobertura/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoCoberturaService.deleteCoberturaId(id);
  }
}
