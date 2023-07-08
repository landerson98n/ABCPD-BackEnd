import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { TransferirAnimalService } from './transferir-animal.service';
import { TransferirAnimalDTO } from './dto/transferir-animal.dto';

@Controller('transferir-animal')
export class TransferirAnimalController {
  constructor(private readonly transferirAnimalService: TransferirAnimalService) {}

  @Post()
  cadastrarAnimal(@Body() dto: TransferirAnimalDTO) {
    return this.transferirAnimalService.transferirAnimal(dto);
  }

  @Get('get-transferir-animal')
  getAnimais() {
    return this.transferirAnimalService.getTransferirAnimal();
  }

  @Get('get-transferir-animal-ById/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.transferirAnimalService.getTransferirAnimalById(id);
  }

  @Post('update-transferir-animal/:id')
  updateAnimal(
    @Body()
    dto: TransferirAnimalDTO,
    @Param('id')
    id: string,
  ) {
    return this.transferirAnimalService.updateTransferirAnimal(dto, id);
  }

  @Delete('delete-transferir-animal/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.transferirAnimalService.deleteTransferirAnimal(id);
  }
}
