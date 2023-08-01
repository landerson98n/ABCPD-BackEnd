import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SolicitacaoCadastroCriadorService } from './solicitacao-cadastro-criador.service';
import { solicitacaoCadatroCriadorDTO } from './dto/solicitacao-cadastro-criador.dto';

@Controller('solicitacao-cadastro-criador')
export class SolicitacaoCadastroCriadorController {
  constructor(private readonly solicitacaoCadastroCriadorService: SolicitacaoCadastroCriadorService) {}

  @Post()
  cadastrarAnimal(@Body() dto: solicitacaoCadatroCriadorDTO) {
    return this.solicitacaoCadastroCriadorService.solicitacaoCadatroCriador(dto);
  }

  @Get('getAnimais')
  getAnimais() {
    return this.solicitacaoCadastroCriadorService.getSolicitacaoCadatroCriador();
  }

  @Get('getAnimalById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroCriadorService.getSolicitacaoCadatroCriadorById(id);
  }

  @Post('updateAnimal/:id')
  updateAnimal(
    @Body()
    dto: solicitacaoCadatroCriadorDTO,
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroCriadorService.updateSolicitacaoCadatroCriador(dto, id);
  }

  @Delete('deleteAnimal/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroCriadorService.deleteSolicitacaoCadatroCriador(id);
  }
}
