import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  NotFoundException,
  UnauthorizedException,
  ParseUUIDPipe,
  SetMetadata,
} from '@nestjs/common';
import { RebanhoService } from './rebanho.service';
import { RebanhoDTO, UpdateRebanhoDTO } from './dto';
import { FazendaService } from '../fazenda/fazenda.service';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';

@Controller('rebanho')
export class RebanhoController {
  constructor(
    private readonly rebanhoService: RebanhoService,
    private readonly fazendaService: FazendaService,
    private readonly userService: UserService,
  ) {}
  
  @SetMetadata('IS_PUBLIC', true)
  @Post('cadastrar-rebanho')
  async cadastrarRebanho(
    @Body()
    rebanhoDTO: RebanhoDTO,
  ) {
    const { fazendaId, serie, criadorId } = rebanhoDTO;

    if (!fazendaId || !serie || !criadorId) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }

    const fazenda = await this.fazendaService.getFazendaBydId(fazendaId);

    if (!fazenda) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    return this.rebanhoService.cadastrarRebanho({
      fazendaId,
      serie,
      criadorId
    });
  }

  @Get('get-rebanhos')
  async getRebanhos(@ActiveUserId() userId: string) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }
    const rebanho  = await this.rebanhoService.getRebanhos();
    
    return rebanho

  }

  @Get('get-rebanho/:serie')
  async getRebanhoById(
    @Param('serie')
    serie: string,
  ) {
    const rebanho  = await this.rebanhoService.getRebanhoBydSerie(serie); 
    
    if (!rebanho) {
      throw new NotFoundException('Rebanho não encontrado!');
    }
    return rebanho
  }

  

  @Get('rebanho-fazenda-id/:id')
  async getRebanhoByFazendaId(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    const rebanho  = await this.rebanhoService.getRebanhoByFazendaId(id);
    if (!rebanho) {
      throw new NotFoundException('Rebanho não encontrado!');
    }
    return rebanho

  }

  @Post('update-rebanho/:id')
  async updateRebanho(
    @Body()
    updateRebanhoDTO: UpdateRebanhoDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const { serie } = updateRebanhoDTO;

    if (!serie) {
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }

    return await this.rebanhoService.updateRebanho({ serie }, id);
  }

  @Delete('delete-rebanho/:id')
  async deleteRebanho(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }
    return await this.rebanhoService.deleteRebanho(id);
  }
}
