import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  UnauthorizedException,
  ParseUUIDPipe,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { FazendaService } from './fazenda.service';
import { FazendaDTO, UpdateFazendaDTO } from './dto/fazenda.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';

@Controller('fazenda')
export class FazendaController {
  constructor(private readonly fazendaService: FazendaService, private readonly userService: UserService) {}

  @Post('cadastrar-fazenda')
  async cadastrarFazenda(
    @Body()
    fazendaDTO: FazendaDTO,
    @ActiveUserId() userId: string,
  ) {
    const {
      criadorFazenda,
      areaFazenda,
      atualizacoes,
      comoChegar,
      dataDocumentacao,
      fazendaCadastrada,
      femeas04Fazenda,
      femeas1224Fazenda,
      femeas2436Fazenda,
      femeas36Fazenda,
      femeas412Fazenda,
      macho04Fazenda,
      macho1224Fazenda,
      macho2436Fazenda,
      macho36Fazenda,
      macho412Fazenda,
      municipioFazenda,
      nomeFazenda,
      observacoes,
      outrasEspecies,
      proponente1,
      proponente2,
      proponente3,
      telefoneFazenda,
    } = fazendaDTO;

    if (
      !criadorFazenda ||
      !areaFazenda ||
      !atualizacoes ||
      !comoChegar ||
      !femeas04Fazenda ||
      fazendaCadastrada ||
      !dataDocumentacao ||
      !femeas1224Fazenda ||
      !femeas2436Fazenda ||
      !femeas36Fazenda ||
      !femeas412Fazenda ||
      !macho04Fazenda ||
      !macho1224Fazenda ||
      !macho2436Fazenda ||
      !macho36Fazenda ||
      !macho412Fazenda ||
      !municipioFazenda ||
      !nomeFazenda ||
      !observacoes ||
      !outrasEspecies ||
      !proponente1 ||
      !proponente2 ||
      !proponente3 ||
      !telefoneFazenda
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return await this.fazendaService.cadastrarFazenda({
      criadorFazenda,
      areaFazenda,
      atualizacoes,
      comoChegar,
      dataDocumentacao,
      fazendaCadastrada,
      femeas04Fazenda,
      femeas1224Fazenda,
      femeas2436Fazenda,
      femeas36Fazenda,
      femeas412Fazenda,
      macho04Fazenda,
      macho1224Fazenda,
      macho2436Fazenda,
      macho36Fazenda,
      macho412Fazenda,
      municipioFazenda,
      nomeFazenda,
      observacoes,
      outrasEspecies,
      proponente1,
      proponente2,
      proponente3,
      telefoneFazenda,
    });
  }

  @Get('get-fazenda')
  async getFazendaes(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    return this.fazendaService.getFazendas();
  }

  @Get('get-fazenda/:id')
  async getFazendaById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Tecnico')) {
      throw new UnauthorizedException();
    }

    const userCriadorService = await this.fazendaService.getFazendaBydId(id);

    if (!userCriadorService) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    return userCriadorService;
  }

  @Put('update-fazenda/:id')
  async updateFazenda(
    @Body()
    fazendaDTO: UpdateFazendaDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const {
      areaFazenda,
      atualizacoes,
      comoChegar,
      dataDocumentacao,
      fazendaCadastrada,
      femeas04Fazenda,
      femeas1224Fazenda,
      femeas2436Fazenda,
      femeas36Fazenda,
      femeas412Fazenda,
      macho04Fazenda,
      macho1224Fazenda,
      macho2436Fazenda,
      macho36Fazenda,
      macho412Fazenda,
      municipioFazenda,
      nomeFazenda,
      observacoes,
      outrasEspecies,
      proponente1,
      proponente2,
      proponente3,
      telefoneFazenda,
    } = fazendaDTO;

    if (
      !areaFazenda ||
      !atualizacoes ||
      !comoChegar ||
      !femeas04Fazenda ||
      fazendaCadastrada ||
      !dataDocumentacao ||
      !femeas1224Fazenda ||
      !femeas2436Fazenda ||
      !femeas36Fazenda ||
      !femeas412Fazenda ||
      !macho04Fazenda ||
      !macho1224Fazenda ||
      !macho2436Fazenda ||
      !macho36Fazenda ||
      !macho412Fazenda ||
      !municipioFazenda ||
      !nomeFazenda ||
      !observacoes ||
      !outrasEspecies ||
      !proponente1 ||
      !proponente2 ||
      !proponente3 ||
      !telefoneFazenda
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const userAutentication = await this.userService.getUserBydId(userId);

    if (userAutentication.pessoa !== 'Tecnico') {
      throw new UnauthorizedException();
    }

    const fazenda = await this.fazendaService.getFazendaBydId(id);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não existe!');
    }

    return this.fazendaService.updateFazenda(
      {
        areaFazenda,
        atualizacoes,
        comoChegar,
        dataDocumentacao,
        fazendaCadastrada,
        femeas04Fazenda,
        femeas1224Fazenda,
        femeas2436Fazenda,
        femeas36Fazenda,
        femeas412Fazenda,
        macho04Fazenda,
        macho1224Fazenda,
        macho2436Fazenda,
        macho36Fazenda,
        macho412Fazenda,
        municipioFazenda,
        nomeFazenda,
        observacoes,
        outrasEspecies,
        proponente1,
        proponente2,
        proponente3,
        telefoneFazenda,
      },
      id,
    );
  }

  @Delete('delete-fazenda/:id')
  async deleteFazenda(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const userAutentication = await this.userService.getUserBydId(userId);

    if (userAutentication.pessoa !== 'Tecnico') {
      throw new UnauthorizedException();
    }

    const fazenda = await this.fazendaService.getFazendaBydId(id);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    await this.fazendaService.deleteFazenda(id);

    null;
  }
}
