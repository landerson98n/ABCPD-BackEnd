import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';
import { UserService } from '../user/user.service';
import { AnimalService } from '../animal/animal.service';
import { TecnicoService } from '../tecnico/tecnico.service';
import { CriadorService } from '../criador/criador.service';
import { FazendaService } from '../fazenda/fazenda.service';

@Controller('comunicacao-nascimento')
export class ComunicacaoNascimentoController {
  constructor(
    private readonly comunicacaoNascimentoService: ComunicacaoNascimentoService,
    private readonly animalService: AnimalService,
    private readonly userService: UserService,
    private readonly tecnicoService: TecnicoService,
    private readonly criadorService: CriadorService,
    private readonly fazendaService: FazendaService,
  ) {}

  @Post('cadastrar-nascimento')
  create(@Body() createComunicacaoNascimentoDto: ComunicacaoNascimentoDto) {
    const {
      coberturaRegistradaId,
      criadorNascimentoId,
      fazendaNascimentoId,
      matrizAnimalId,
      reprodutorAnimalId,
      tecnicoNascimentoId,
      animalBezerro,
      dataComunicacao,
      dataNascimento,
      finalizadoNascimento,
      observacoes,
      statusNascimento,
    } = createComunicacaoNascimentoDto;

    return this.comunicacaoNascimentoService.comunicacaoNascimento(createComunicacaoNascimentoDto);
  }

  @Get('get-comunicacoes-nascimentos')
  getAnimais() {
    return this.comunicacaoNascimentoService.getComunicacaoNascimento();
  }

  @Get('get-comunicacoes-nascimentos/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.getComunicacaoNascimentoById(id);
  }

  @Post('update-comunicacoes-nascimentos/:id')
  updateAnimal(
    @Body()
    dto: ComunicacaoNascimentoDto,
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.updateComunicacaoNascimentoId(dto, id);
  }

  @Delete('delete-comunicacoes-nascimentos/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.comunicacaoNascimentoService.deleteComunicacaoNascimentoId(id);
  }
}
