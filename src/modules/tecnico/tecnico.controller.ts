import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { TecnicoDTO, UpdateTecnicoDTO } from './dto/tecnico.dto';

@Controller('tecnico')
export class TecnicoController {
  constructor(private tecnicoService: TecnicoService) {}

  @Post('cadastrarTecnico')
  cadastrarTecnico(
    @Body()
    dto: TecnicoDTO,
  ) {
    return this.tecnicoService.cadastrarTecnico(dto);
  }

  @Get('getTecnicos')
  getTecnicoes() {
    return this.tecnicoService.getTecnicos();
  }

  @Get('getTecnicoById/:id')
  getTecnicoById(
    @Param('id')
    id: string,
  ) {
    return this.tecnicoService.getTecnicoBydId(id);
  }

  @Post('updateTecnico/:id')
  updateTecnico(
    @Body()
    dto: UpdateTecnicoDTO,
    @Param('id')
    id: string,
  ) {
    return this.tecnicoService.updateTecnico(dto, id);
  }

  @Delete('deleteTecnico/:id')
  deleteTecnico(
    @Param('id')
    id: string,
  ) {
    return this.tecnicoService.deleteTecnico(id);
  }
}
