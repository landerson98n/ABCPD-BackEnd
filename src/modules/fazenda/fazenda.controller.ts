import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaDTO, UpdateFazendaDTO } from './dto/fazenda.dto';

@Controller('fazenda')
export class FazendaController {
  constructor(private fazendaService: FazendaService) {}

  @Post('cadastrarFazenda')
  cadastrarFazenda(
    @Body()
    dto: FazendaDTO,
  ) {
    return this.fazendaService.cadastrarFazenda(dto);
  }

  @Get('getFazendas')
  getFazendaes() {
    return this.fazendaService.getFazendas();
  }

  @Get('getFazendaById/:id')
  getFazendaById(
    @Param('id')
    id: string,
  ) {
    return this.fazendaService.getFazendaBydId(id);
  }

  @Post('updateFazenda/:id')
  updateFazenda(
    @Body()
    dto: UpdateFazendaDTO,
    @Param('id')
    id: string,
  ) {
    return this.fazendaService.updateFazenda(dto, id);
  }

  @Delete('deleteFazenda/:id')
  deleteFazenda(
    @Param('id')
    id: string,
  ) {
    return this.fazendaService.deleteFazenda(id);
  }
}
