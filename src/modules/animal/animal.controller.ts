import { Body, Controller, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDTO } from './dto/animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post('cadastrarAnimal')
  cadastrarAnimal(@Body() dto: AnimalDTO) {
    return this.animalService.cadastrarAnimal(dto);
  }
}
