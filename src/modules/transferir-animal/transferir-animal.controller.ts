import { Controller, Post, Body } from '@nestjs/common';
import { TransferirAnimalService } from './transferir-animal.service';
import { TransferirAnimalDTO } from './dto/transferir-animal.dto';

@Controller('transferir-animal')
export class TransferirAnimalController {
  constructor(
    private readonly transferirAnimalService: TransferirAnimalService,
  ) {}

  @Post()
  cadastrarAnimal(@Body() dto: TransferirAnimalDTO) {
    return this.transferirAnimalService.transferirAnimal(dto);
  }
}
