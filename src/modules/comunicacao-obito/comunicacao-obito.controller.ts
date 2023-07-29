import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  ParseUUIDPipe,
  UnauthorizedException,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { ComunicacaoObitoService } from './comunicacao-obito.service';
import { ComunicacaoObitoDto } from './dto/comunicacaoObito.dto';
import { AnimalService } from '../animal/animal.service';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';

@Controller('comunicacao-obito')
export class ComunicacaoObitoController {
  constructor(
    private readonly comunicacaoObitoService: ComunicacaoObitoService,
    private readonly animalService: AnimalService,
    private readonly userService: UserService,
  ) {}

  @Post('cadastrar-obito')
  async cadastrarObito(@Body() comunicacaoObitoDto: ComunicacaoObitoDto, @ActiveUserId() userId: string) {
    const { animalId, causa, dataObito, nomeAnimal } = comunicacaoObitoDto;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.comunicacaoObitoService.cadastrarObito({
      animalId,
      causa,
      dataObito,
      nomeAnimal,
    });
  }

  @Get('get-obitos')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.comunicacaoObitoService.getObitos();
  }

  @Get('get-obito/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const exisObito = this.comunicacaoObitoService.getObitoBydId(id);

    if (!exisObito) {
      throw new NotFoundException('Obito não encontrada na base de dados!');
    }

    return exisObito;
  }

  @Put('update-obito/:id')
  async updateAnimal(
    @Body()
    comunicacaoObitoDto: ComunicacaoObitoDto,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const { animalId, causa, dataObito, nomeAnimal } = comunicacaoObitoDto;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const exisObito = this.comunicacaoObitoService.getObitoBydId(id);

    if (!exisObito) {
      throw new NotFoundException('Obito não encontrada na base de dados!');
    }

    await this.comunicacaoObitoService.updateObito(
      {
        animalId,
        causa,
        dataObito,
        nomeAnimal,
      },
      id,
    );

    return null;
  }

  @Delete('delete-obito/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const exisObito = this.comunicacaoObitoService.getObitoBydId(id);

    if (!exisObito) {
      throw new NotFoundException('Obito não encontrada na base de dados!');
    }

    await this.comunicacaoObitoService.deleteObito(id);

    return null;
  }
}
