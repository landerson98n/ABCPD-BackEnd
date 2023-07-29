import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  NotFoundException,
  UnauthorizedException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { ComunicacaoNascimentoService } from './comunicacao-nascimento.service';
import { ComunicacaoNascimentoDto } from './dto/comunicacao-nascimento.dto';
import { UserService } from '../user/user.service';
import { AnimalService } from '../animal/animal.service';
import { TecnicoService } from '../tecnico/tecnico.service';
import { CriadorService } from '../criador/criador.service';
import { FazendaService } from '../fazenda/fazenda.service';
import { ComunicacaoCoberturaService } from '../comunicacao-cobertura/comunicacao-cobertura.service';
import { MatrixService } from '../matrix/matrix.service';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';

@Controller('comunicacao-nascimento')
export class ComunicacaoNascimentoController {
  constructor(
    private readonly comunicacaoNascimentoService: ComunicacaoNascimentoService,
    private readonly animalService: AnimalService,
    private readonly userService: UserService,
    private readonly tecnicoService: TecnicoService,
    private readonly criadorService: CriadorService,
    private readonly fazendaService: FazendaService,
    private readonly coberturaService: ComunicacaoCoberturaService,
    private readonly matrixService: MatrixService,
  ) {}

  @Post('cadastrar-nascimento')
  async create(@Body() createComunicacaoNascimentoDto: ComunicacaoNascimentoDto, @ActiveUserId() userId: string) {
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

    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const exisCobertura = await this.coberturaService.getCoberturaById(coberturaRegistradaId);

    if (!exisCobertura) {
      throw new NotFoundException('Cobertura não encontrada!');
    }

    const exisCriador = await this.criadorService.getCriadorBydId(criadorNascimentoId);

    if (!exisCriador) {
      throw new NotFoundException('Criador não encontrado na base de dados!');
    }

    const existFazenda = await this.fazendaService.getFazendaBydId(fazendaNascimentoId);

    if (!existFazenda) {
      throw new NotFoundException('Fazenda não encontrada na base de dados!');
    }

    const existAnimal = await this.animalService.getAnimalBydId(reprodutorAnimalId);

    if (!existAnimal) {
      throw new NotFoundException('Animal não encontrada na base de dados!');
    }

    const existMatriz = await this.animalService.getAnimalBydId(matrizAnimalId);

    if (!existMatriz) {
      throw new NotFoundException('Matriz animal não encontrada na base de dados!');
    }

    const existTecnico = await this.tecnicoService.getTecnicoBydId(tecnicoNascimentoId);

    if (!existTecnico) {
      throw new NotFoundException('Fazenda não encontrada na base de dados!');
    }

    await this.comunicacaoNascimentoService.comunicacaoNascimento({
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
    });

    return null;
  }

  @Get('get-comunicacoes-nascimentos')
  async getAnimais(@ActiveUserId() userId: string) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    return this.comunicacaoNascimentoService.getComunicacaoNascimento();
  }

  @Get('get-comunicacoes-nascimentos/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const comunicacoes = await this.comunicacaoNascimentoService.getComunicacaoNascimentoById(id);

    return comunicacoes;
  }

  @Put('update-comunicacoes-nascimentos/:id')
  async updateAnimal(
    @Body()
    updateComunicacaoNascimentoDto: ComunicacaoNascimentoDto,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
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
    } = updateComunicacaoNascimentoDto;

    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const exisCobertura = await this.coberturaService.getCoberturaById(coberturaRegistradaId);

    if (!exisCobertura) {
      throw new NotFoundException('Cobertura não encontrada!');
    }

    const exisCriador = await this.criadorService.getCriadorBydId(criadorNascimentoId);

    if (!exisCriador) {
      throw new NotFoundException('Criador não encontrado na base de dados!');
    }

    const existFazenda = await this.fazendaService.getFazendaBydId(fazendaNascimentoId);

    if (!existFazenda) {
      throw new NotFoundException('Fazenda não encontrada na base de dados!');
    }

    const existAnimal = await this.animalService.getAnimalBydId(reprodutorAnimalId);

    if (!existAnimal) {
      throw new NotFoundException('Animal não encontrada na base de dados!');
    }

    const existMatriz = await this.animalService.getAnimalBydId(matrizAnimalId);

    if (!existMatriz) {
      throw new NotFoundException('Matriz animal não encontrada na base de dados!');
    }

    const existTecnico = await this.tecnicoService.getTecnicoBydId(tecnicoNascimentoId);

    if (!existTecnico) {
      throw new NotFoundException('Fazenda não encontrada na base de dados!');
    }

    const existComunicao = await this.comunicacaoNascimentoService.getComunicacaoNascimentoById(id);

    if (!existComunicao) {
      throw new NotFoundException('Comunicação de nascimento não encontrada na base de dados!');
    }

    await this.comunicacaoNascimentoService.updateComunicacaoNascimentoId(
      {
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
      },
      id,
    );

    return null;
  }

  @Delete('delete-comunicacoes-nascimentos/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const existComunicao = await this.comunicacaoNascimentoService.getComunicacaoNascimentoById(id);

    if (!existComunicao) {
      throw new NotFoundException('Comunicação de nascimento não encontrada na base de dados!');
    }

    await this.comunicacaoNascimentoService.deleteComunicacaoNascimentoId(id);

    return null;
  }
}
