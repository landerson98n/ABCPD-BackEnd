import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  UnauthorizedException,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { ComunicacaoCoberturaService } from './comunicacao-cobertura.service';
import { ComunicacaoCoberturaDto } from './dto/comunicao-cobertura.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';
import { CriadorService } from '../criador/criador.service';
import { FazendaService } from '../fazenda/fazenda.service';

@Controller('comunicacao-cobertura')
export class ComunicacaoCoberturaController {
  constructor(
    private readonly comunicacaoCoberturaService: ComunicacaoCoberturaService,
    private readonly userService: UserService,
    private readonly criadorService: CriadorService,
    private readonly fazendaService: FazendaService,
  ) {}

  @Post('cadastrar-cobertura')
  async cadastrarAnimal(@Body() coberturaDTO: ComunicacaoCoberturaDto, @ActiveUserId() userId: string) {
    const {
      criadorCobertura,
      fazendaCobertura,
      pago,
      finalizadoCobertura,
      nomeCobertura,
      observacoes,
      statusCobertura,
      tipoCobertura,
    } = coberturaDTO;

    if (
      !criadorCobertura ||
      !fazendaCobertura ||
      pago ||
      finalizadoCobertura ||
      !nomeCobertura ||
      !observacoes ||
      !statusCobertura ||
      !tipoCobertura
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    const criador = await this.criadorService.getCriadorBydId(criadorCobertura);

    if (!criador) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    const fazenda = await this.fazendaService.getFazendaBydId(fazendaCobertura);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    if (criador.id !== fazenda.criadorFazenda) {
      throw new NotFoundException('O criador não tem vínculo com a fazenda!');
    }

    await this.comunicacaoCoberturaService.cadastrarCobertura({
      criadorCobertura,
      fazendaCobertura,
      pago,
      finalizadoCobertura,
      nomeCobertura,
      observacoes,
      statusCobertura,
      tipoCobertura,
    });

    return null;
  }

  @Get('get-coberturas')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.comunicacaoCoberturaService.getCoberturas();
  }

  @Get('get-coberturas/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.comunicacaoCoberturaService.getCoberturaById(id);
  }

  @Put('update-cobertura/:id')
  async updateAnimal(
    @Body()
    coberturaDTO: ComunicacaoCoberturaDto,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);
    const {
      criadorCobertura,
      fazendaCobertura,
      finalizadoCobertura,
      nomeCobertura,
      observacoes,
      statusCobertura,
      tipoCobertura,
      pago
    } = coberturaDTO;

    if (
      !criadorCobertura ||
      !fazendaCobertura ||
      pago ||
      finalizadoCobertura ||
      !nomeCobertura ||
      !observacoes ||
      !statusCobertura ||
      !tipoCobertura
    ) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const criador = await this.criadorService.getCriadorBydId(criadorCobertura);

    if (!criador) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    const fazenda = await this.fazendaService.getFazendaBydId(fazendaCobertura);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    if (criador.id !== fazenda.criadorFazenda) {
      throw new NotFoundException('O criador não tem vínculo com a fazenda!');
    }

    await this.comunicacaoCoberturaService.updateCobertura(
      {
        criadorCobertura,
        fazendaCobertura,
        finalizadoCobertura,
        nomeCobertura,
        observacoes,
        statusCobertura,
        tipoCobertura,
        pago
      },
      id,
    );

    return null;
  }

  @Delete('delete-cobertura/:id')
  async deleteAnimal(
    @Param('id')
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    await this.comunicacaoCoberturaService.deleteCoberturaId(id);

    return null;
  }
}
