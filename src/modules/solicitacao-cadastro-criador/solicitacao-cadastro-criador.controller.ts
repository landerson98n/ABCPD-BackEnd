import { Controller, Post, Body } from '@nestjs/common';
import { SolicitacaoCadastroCriadorService } from './solicitacao-cadastro-criador.service';
import { solicitacaoCadatroCriadorDTO } from './dto/solicitacao-cadastro-criador.dto';

@Controller('solicitacao-cadastro-criador')
export class SolicitacaoCadastroCriadorController {
  constructor(
    private readonly solicitacaoCadastroCriadorService: SolicitacaoCadastroCriadorService,
  ) {}

  @Post()
  cadastrarAnimal(@Body() dto: solicitacaoCadatroCriadorDTO) {
    return this.solicitacaoCadastroCriadorService.solicitacaoCadatroCriador(
      dto,
    );
  }
}
