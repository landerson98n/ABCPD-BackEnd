import { Controller, Post, Body } from '@nestjs/common';
import { TecnicoService } from './tecnico.service';
import { TecnicoDTO } from './dto/tecnico.dto';

@Controller('tecnico')
export class TecnicoController {
  constructor(private tecnicoService: TecnicoService) {}

  @Post('cadastrarTecnico')
  cadastrarTecnico(@Body() dto: TecnicoDTO) {
    return this.tecnicoService.cadastrarTecnico(dto);
  }
}
