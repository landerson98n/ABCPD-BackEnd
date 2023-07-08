import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseService } from './solicitacao-registro-animal-base.service';
import { SolicitacaoRegistroAnimalBaseDTO } from './dto/solicitacao-registro-animal-base.dto';

@Controller('solicitacao-registro-animal-base')
export class SolicitacaoRegistroAnimalBaseController {
  constructor(private readonly solicitacaoRegistroAnimalBaseService: SolicitacaoRegistroAnimalBaseService) {}

  @Post()
  cadastrarAnimal(@Body() dto: SolicitacaoRegistroAnimalBaseDTO) {
    return this.solicitacaoRegistroAnimalBaseService.cadastrarSolicitacaoRegistroAnimalBase(dto);
  }

  @Get('getAnimais')
  getAnimais() {
    return this.solicitacaoRegistroAnimalBaseService.getSolicitacaoRegistroAnimalBase();
  }

  @Get('getAnimalById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoRegistroAnimalBaseService.getSolicitacaoRegistroAnimalBaseById(id);
  }

  @Post('updateAnimal/:id')
  updateAnimal(
    @Body()
    dto: SolicitacaoRegistroAnimalBaseDTO,
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoRegistroAnimalBaseService.updateSolicitacaoRegistroAnimalBase(dto, id);
  }

  @Delete('deleteAnimal/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoRegistroAnimalBaseService.deleteSolicitacaoRegistroAnimalBase(id);
  }
}
