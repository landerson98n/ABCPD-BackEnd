import { Controller, Post, Body, Get, Param, Delete, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { SolicitacaoRegistroAnimalBaseService } from './solicitacao-registro-animal-base.service';
import { SolicitacaoRegistroAnimalBaseDTO } from './dto/solicitacao-registro-animal-base.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';
import { CriadorService } from '../criador/criador.service';
import { TecnicoService } from '../tecnico/tecnico.service';

@Controller('animal-base')
export class SolicitacaoRegistroAnimalBaseController {
  constructor(
    private readonly solicitacaoRegistroAnimalBaseService: SolicitacaoRegistroAnimalBaseService,
    private readonly userService: UserService,
    private readonly criadorService: CriadorService,
    private readonly tecnicoService: TecnicoService
    ) {}

  @Post('solicitacao-registro-animal-base')
  async cadastrarSolicitacaoRegistroAnimalBase(
  @Body() dto: SolicitacaoRegistroAnimalBaseDTO,
  @ActiveUserId() userId: string) {
    const {criadorId, quantidadeAnimais, tecnicoId} = dto

    if(!criadorId || !quantidadeAnimais|| !tecnicoId){
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    const criador = await this.criadorService.getCriadorBydId(criadorId);
    const tecnico = await this.tecnicoService.getTecnicoBydId(tecnicoId);

    if (!criador) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    if (!tecnico) {
      throw new NotFoundException('Tecnico(a) não encontrado(a)!');
    }
    dto.estadoSolicitacao = 'Em Aberto'
    return this.solicitacaoRegistroAnimalBaseService.cadastrarSolicitacaoRegistroAnimalBase(dto);
  }

  @Get('get-solicitacoes-registros-animais-base')
  async getSolicitacoesRegistrosAnimaisBase(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user)) {
      throw new NotFoundException('Usuario não encontrado(a)!');
    }
    return this.solicitacaoRegistroAnimalBaseService.getSolicitacaoRegistroAnimalBase();
  }

  @Get('get-solicitacao-registro-animal-base-ById/:id')
  async getSolicitacaoRegistroAnimalBaseById(
    @Param('id')
    id: string,
    @ActiveUserId() userId: string
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user)) {
      throw new NotFoundException('Usuario não encontrado(a)!');
    }
    return this.solicitacaoRegistroAnimalBaseService.getSolicitacaoRegistroAnimalBaseById(id);
  }

  @Post('update-solicitacao-registro-animal-base/:id')
  async updateSolicitacaoRegistroAnimalBase(
    @Body()
    dto: SolicitacaoRegistroAnimalBaseDTO,
    @Param('id')
    id: string,
    @ActiveUserId() userId: string
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user)) {
      throw new NotFoundException('Usuario não encontrado(a)!');
    }

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }
    return this.solicitacaoRegistroAnimalBaseService.updateSolicitacaoRegistroAnimalBase(dto, id);
  }

  @Delete('delete-solicitacao-registro-animal-base/:id')
  async deleteSolicitacaoRegistroAnimalBase(
    @Param('id')
    id: string,
    @ActiveUserId() userId: string
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user)) {
      throw new NotFoundException('Usuario não encontrado(a)!');
    }
    
    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }
    return this.solicitacaoRegistroAnimalBaseService.deleteSolicitacaoRegistroAnimalBase(id);
  }
}
