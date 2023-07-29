import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UnauthorizedException,
  NotFoundException,
  ParseUUIDPipe,
  Put,
} from '@nestjs/common';
import { TransferirAnimalService } from './transferir-animal.service';
import { TransferirAnimalDTO } from './dto/transferir-animal.dto';
import { AnimalService } from '../animal/animal.service';
import { UserService } from '../user/user.service';
import { CriadorService } from '../criador/criador.service';
import { FazendaService } from '../fazenda/fazenda.service';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';

@Controller('transferir-animal')
export class TransferirAnimalController {
  constructor(
    private readonly transferirAnimalService: TransferirAnimalService,
    private readonly animalService: AnimalService,
    private readonly userService: UserService,
    private readonly criadorService: CriadorService,
    private readonly fazendaService: FazendaService,
  ) {}

  @Post('cadastrar-animal')
  async cadastrarAnimal(@Body() transferirAnimalDTO: TransferirAnimalDTO, @ActiveUserId() userId: string) {
    const { adquirente, animal, fazendaAdquirente, fazendaTransmitente, transmitente, dataTransferencia, nomeAnimal } =
      transferirAnimalDTO;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    // Existe criador que vai receber o animal
    const criadorAdquirente = await this.criadorService.getCriadorBydId(adquirente);

    if (!criadorAdquirente) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    // Existe criador que vai receber enviar o animal
    const criadorTransmitente = await this.criadorService.getCriadorBydId(transmitente);

    if (!criadorTransmitente) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    // Existe fazenda que vai receber o animal
    const fazendaAdqu = await this.fazendaService.getFazendaBydId(fazendaAdquirente);

    if (!fazendaAdqu) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    // Existe fazenda que vai receber o animal
    const fazendaTrans = await this.fazendaService.getFazendaBydId(fazendaTransmitente);

    if (!fazendaTrans) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    return this.transferirAnimalService.transferirAnimal({
      adquirente,
      animal,
      fazendaAdquirente,
      fazendaTransmitente,
      transmitente,
      dataTransferencia,
      nomeAnimal,
    });
  }

  @Get('get-transferir-animal')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    return this.transferirAnimalService.getTransferirAnimal();
  }

  @Get('get-transferir-animal/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    const existTrans = this.transferirAnimalService.getTransferirAnimalById(id);

    if (!existTrans) {
      throw new NotFoundException('Transferência não encontrada na base de dados!');
    }

    return existTrans;
  }

  @Put('update-transferir-animal/:id')
  async updateAnimal(
    @Body()
    transferirAnimalDTO: TransferirAnimalDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const { adquirente, animal, fazendaAdquirente, fazendaTransmitente, transmitente, dataTransferencia, nomeAnimal } =
      transferirAnimalDTO;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    // Existe criador que vai receber o animal
    const criadorAdquirente = await this.criadorService.getCriadorBydId(adquirente);

    if (!criadorAdquirente) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    // Existe criador que vai receber enviar o animal
    const criadorTransmitente = await this.criadorService.getCriadorBydId(transmitente);

    if (!criadorTransmitente) {
      throw new NotFoundException('Criador(a) não encontrado(a)!');
    }

    // Existe fazenda que vai receber o animal
    const fazendaAdqu = await this.fazendaService.getFazendaBydId(fazendaAdquirente);

    if (!fazendaAdqu) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    // Existe fazenda que vai receber o animal
    const fazendaTrans = await this.fazendaService.getFazendaBydId(fazendaTransmitente);

    if (!fazendaTrans) {
      throw new NotFoundException('Fazenda não encontrada!');
    }

    const existTrans = this.transferirAnimalService.getTransferirAnimalById(id);

    if (!existTrans) {
      throw new NotFoundException('Transferência não encontrada na base de dados!');
    }

    await this.transferirAnimalService.updateTransferirAnimal(
      {
        adquirente,
        animal,
        fazendaAdquirente,
        fazendaTransmitente,
        transmitente,
        dataTransferencia,
        nomeAnimal,
      },
      id,
    );

    return null;
  }

  @Delete('delete-transferir-animal/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Criador')) {
      throw new UnauthorizedException();
    }

    const existTrans = this.transferirAnimalService.getTransferirAnimalById(id);

    if (!existTrans) {
      throw new NotFoundException('Transferência não encontrada na base de dados!');
    }

    await this.transferirAnimalService.deleteTransferirAnimal(id);

    return null;
  }
}
