import { Controller, Post, Body } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseService } from './solicitacao-registro-animal-base.service';
import { SolicitacaoRegistroAnimalBaseDTO } from './dto/solicitacao-registro-animal-base.dto';

@Controller('solicitacao-registro-animal-base')
export class SolicitacaoRegistroAnimalBaseController {
  constructor(
    private readonly solicitacaoRegistroAnimalBaseService: SolicitacaoRegistroAnimalBaseService,
  ) {}

  @Post()
  cadastrarAnimal(@Body() dto: SolicitacaoRegistroAnimalBaseDTO) {
    return this.solicitacaoRegistroAnimalBaseService.transferirAnimal(dto);
  }
}
