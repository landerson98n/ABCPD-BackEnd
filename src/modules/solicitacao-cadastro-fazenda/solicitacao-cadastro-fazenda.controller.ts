import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { SolicitacaoCadastroFazendaService } from './solicitacao-cadastro-fazenda.service';
import { solicitacaoCadastroFazendaDTO } from './dto/solicitacao-cadastro-fazenda.dto';

@Controller('solicitacao-cadastro-fazenda')
export class SolicitacaoCadastroFazendaController {
  constructor(private readonly solicitacaoCadastroFazendaService: SolicitacaoCadastroFazendaService) {}

  @Post('solicitacao-cadastro-fazenda')
  solicitacaoCadastroFazenda(@Body() dto: solicitacaoCadastroFazendaDTO) {
    return this.solicitacaoCadastroFazendaService.solicitacaoCadastroFazenda(dto);
  }

  @Get('get-solicitacoes-cadastros-fazendas')
  getSolicitacoesCadastrosFazendas() {
    return this.solicitacaoCadastroFazendaService.getSolicitacaoCadastroFazenda();
  }

  @Get('get-solicitacao-cadastro-fazenda-ById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.getSolicitacaoCadastroFazendaById(id);
  }

  @Post('update-solicitacao-cadastro-fazenda/:id')
  updateAnimal(
    @Body()
    dto: solicitacaoCadastroFazendaDTO,
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.updateSolicitacaoCadastroFazenda(dto, id);
  }

  @Delete('delete-solicitacao-cadastro-fazenda/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.solicitacaoCadastroFazendaService.deleteSolicitacaoCadastroFazenda(id);
  }
}
