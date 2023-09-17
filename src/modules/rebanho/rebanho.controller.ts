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
    const { fazendaId, serie } = rebanhoDTO;

    if (!fazendaId || !serie) {
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
    });
  }

  @Get('get-rebanhos')
  getRebanhos(@ActiveUserId() userId: string) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }
    return this.rebanhoService.getRebanhos();
  }


  @SetMetadata('IS_PUBLIC', true)
  @Get('get-rebanho/:serie')
  getRebanhoById(
    @Param('serie', ParseUUIDPipe)
    serie: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }

    return this.rebanhoService.getRebanhoBydSerie(serie);
  }

  @SetMetadata('IS_PUBLIC', true)
  @Get('rebanho-fazenda-id/:id')
  getRebanhoByFazendaId(
    @Param('id', ParseUUIDPipe)
    id: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }

    return this.rebanhoService.getRebanhoByFazendaId(id);
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

    return this.rebanhoService.updateRebanho({ serie }, id);
  }

  @Delete('delete-rebanho/:id')
  deleteRebanho(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // ??????
    // if (!(user.pessoa === 'Criador')) {
    //   throw new UnauthorizedException();
    // }
    return this.rebanhoService.deleteRebanho(id);
  }
}
