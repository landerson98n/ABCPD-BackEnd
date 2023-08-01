import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SolicitacaoCadastroFazendaService } from './solicitacao-cadastro-fazenda.service';
import { solicitacaoCadastroFazendaDTO } from './dto/solicitacao-cadastro-fazenda.dto';

@Controller('solicitacao-cadastro-fazenda')
export class SolicitacaoCadastroFazendaController {
  constructor(private readonly solicitacaoCadastroFazendaService: SolicitacaoCadastroFazendaService) {}

  @Post()
  cadastrarAnimal(@Body() dto: solicitacaoCadastroFazendaDTO) {
    return this.solicitacaoCadastroFazendaService.solicitacaoCadastroFazenda(dto);
  }

  @Get('getAnimais')
  getAnimais() {
    return this.solicitacaoCadastroFazendaService.getSolicitacaoCadastroFazenda();
  }

  @Get('getAnimalById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.getSolicitacaoCadastroFazendaById(id);
  }

  @Post('updateAnimal/:id')
  updateAnimal(
    @Body()
    dto: solicitacaoCadastroFazendaDTO,
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.updateSolicitacaoCadastroFazenda(dto, id);
  }

  @Delete('deleteAnimal/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.deleteSolicitacaoCadastroFazenda(id);
  }
}
