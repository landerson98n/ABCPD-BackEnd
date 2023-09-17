import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  UnauthorizedException,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDTO, UpdateAnimalDTO } from './dto/animal.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';
import { CriadorService } from '../criador/criador.service';
import { FazendaService } from '../fazenda/fazenda.service';
import { RebanhoService } from '../rebanho/rebanho.service';

@Controller('animal')
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService,
    private readonly userService: UserService,
    private readonly criadorService: CriadorService,
    private readonly fazendaService: FazendaService,
    private readonly rebanhoService: RebanhoService,
  ) {}

  @Post('cadastrar-animal')
  async cadastrarAnimal(
    @Body()
    animalDTO: AnimalDTO,
    @ActiveUserId() userId: string,
  ) {
    const {
      criadorAnimal,
      fazenda,
      rebanho,
      pai,
      mae,
      dataAvalicacao,
      composicaoGenetica,
      dataRGDAnimalSuper,
      dataRGDAnimalTecnico,
      dataRGNAnimalSuper,
      dataRGNAnimalTecnico,
      dataNascimentoAnimal,
      decisaoAnimalSuperRGD,
      decisaoAnimalSuperRGN,
      decisaoAnimalTecnicoRGD,
      decisaoAnimalTecnicoRGN,
      image01,
      image02,
      image03,
      image04,
      nomeAnimal,
      observacaoSuper,
      observacaoTecnico,
      pelagemAnimal,
      racaAnimalMatriz,
      registradoRGDSuper,
      registradoRGDTecnico,
      registradoRGNSuper,
      registradoRGNTecnico,
      registro,
      registroGeral,
      sexoAnimal,
      flag,
    } = animalDTO;

    if (
      !criadorAnimal ||
      !fazenda ||
      !dataAvalicacao ||
      !dataRGNAnimalTecnico ||
      !dataNascimentoAnimal ||
      !decisaoAnimalTecnicoRGN ||
      !image01 ||
      !image02 ||
      !image03 ||
      !image04 ||
      !nomeAnimal ||
      !pelagemAnimal ||
      !registradoRGNTecnico ||
      !registro ||
      !sexoAnimal
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    // Existe criador
    const criador = await this.criadorService.getCriadorBydId(criadorAnimal);

    if (!criador) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    // Existe fazenda
    const fazendaEx = await this.fazendaService.getFazendaBydId(fazenda);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    if (criador.id !== fazendaEx.criadorFazenda) {
      throw new NotFoundException('O criador não tem vínculo com a fazenda!');
    }

    // Existe rebanho
    const rebanhoEx = await this.rebanhoService.getRebanhoBydId(rebanho);

    if (!rebanhoEx) {
      throw new NotFoundException('Rebanho não encontrada!');
    }

    await this.animalService.cadastrarAnimal({
      criadorAnimal,
      fazenda,
      pai: pai || null,
      mae: mae || null,
      rebanho,
      dataAvalicacao,
      composicaoGenetica,
      dataRGDAnimalSuper,
      dataRGDAnimalTecnico,
      dataRGNAnimalSuper,
      dataRGNAnimalTecnico,
      dataNascimentoAnimal,
      decisaoAnimalSuperRGD,
      decisaoAnimalSuperRGN,
      decisaoAnimalTecnicoRGD,
      decisaoAnimalTecnicoRGN,
      image01,
      image02,
      image03,
      image04,
      nomeAnimal,
      observacaoSuper,
      observacaoTecnico,
      pelagemAnimal,
      racaAnimalMatriz,
      registradoRGDSuper,
      registradoRGDTecnico,
      registradoRGNSuper,
      registradoRGNTecnico,
      registro,
      registroGeral,
      sexoAnimal,
      flag,
    });

    return null;
  }

  @Get('get-animal')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return this.animalService.getAnimais();
  }

  @Get('get-animal-criador')
  async getAnimaisCriador(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }
    const userCriadorService = await this.criadorService.getCriadorByUserId(userId);

    return this.animalService.getAnimaisCriador(userCriadorService.id);
  }

  @Get('get-animal-criador/:id')
  async getAnimaisCriadorId(@Param('id', ParseUUIDPipe)
  id: string, @ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!user) {
      throw new NotFoundException();
    }

    return this.animalService.getAnimaisCriador(id);
  }

  @Get('get-animal/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    const animalEx = await this.animalService.getAnimalBydId(id);

    if (!animalEx) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    return animalEx;
  }

  @Put('update-animal/:id')
  async updateAnimal(
    @Body()
    updateAnimalDTO: UpdateAnimalDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const {
      dataAvalicacao,
      composicaoGenetica,
      dataRGDAnimalSuper,
      dataRGDAnimalTecnico,
      dataRGNAnimalSuper,
      dataRGNAnimalTecnico,
      dataNascimentoAnimal,
      decisaoAnimalSuperRGD,
      decisaoAnimalSuperRGN,
      decisaoAnimalTecnicoRGD,
      decisaoAnimalTecnicoRGN,
      image01,
      image02,
      image03,
      image04,
      nomeAnimal,
      observacaoSuper,
      observacaoTecnico,
      pelagemAnimal,
      racaAnimalMatriz,
      registradoRGDSuper,
      registradoRGDTecnico,
      registradoRGNSuper,
      registradoRGNTecnico,
      registro,
      registroGeral,
      sexoAnimal,
      flag,
    } = updateAnimalDTO;

    if (
      !dataAvalicacao ||
      !composicaoGenetica ||
      !dataRGDAnimalSuper ||
      !dataRGDAnimalTecnico ||
      !dataRGNAnimalSuper ||
      !dataRGNAnimalTecnico ||
      !dataNascimentoAnimal ||
      !decisaoAnimalSuperRGD ||
      !decisaoAnimalSuperRGN ||
      !decisaoAnimalTecnicoRGD ||
      !decisaoAnimalTecnicoRGN ||
      !image01 ||
      !image02 ||
      !image03 ||
      !image04 ||
      !nomeAnimal ||
      !observacaoSuper ||
      !observacaoTecnico ||
      !pelagemAnimal ||
      !racaAnimalMatriz ||
      !registradoRGDSuper ||
      !registradoRGDTecnico ||
      !registradoRGNSuper ||
      !registradoRGNTecnico ||
      !registro ||
      !registroGeral ||
      !sexoAnimal
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return this.animalService.updateAnimal(
      {
        dataAvalicacao,
        composicaoGenetica,
        dataRGDAnimalSuper,
        dataRGDAnimalTecnico,
        dataRGNAnimalSuper,
        dataRGNAnimalTecnico,
        dataNascimentoAnimal,
        decisaoAnimalSuperRGD,
        decisaoAnimalSuperRGN,
        decisaoAnimalTecnicoRGD,
        decisaoAnimalTecnicoRGN,
        image01,
        image02,
        image03,
        image04,
        nomeAnimal,
        observacaoSuper,
        observacaoTecnico,
        pelagemAnimal,
        racaAnimalMatriz,
        registradoRGDSuper,
        registradoRGDTecnico,
        registradoRGNSuper,
        registradoRGNTecnico,
        registro,
        registroGeral,
        sexoAnimal,
        flag,
      },
      id,
    );
  }

  @Delete('deleteAnimal/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return this.animalService.deleteAnimal(id);
  }
}
