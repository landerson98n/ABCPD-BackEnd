import { Controller, Post, Body } from '@nestjs/common';
import { SolicitacaoCadastroFazendaService } from './solicitacao-cadastro-fazenda.service';
import { solicitacaoCadastroFazendaDTO } from './dto/solicitacao-cadastro-fazenda.dto';

@Controller('solicitacao-cadastro-fazenda')
export class SolicitacaoCadastroFazendaController {
  constructor(
    private readonly solicitacaoCadastroFazendaService: SolicitacaoCadastroFazendaService,
  ) {}

  @Post()
  cadastrarAnimal(@Body() dto: solicitacaoCadastroFazendaDTO) {
    return this.solicitacaoCadastroFazendaService.solicitacaoCadastroFazenda(
      dto,
    );
  }
}
