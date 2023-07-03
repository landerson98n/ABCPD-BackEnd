import { Controller, Post, Body } from '@nestjs/common';
import { RegistroAnimalBaseService } from './registro-animal-base.service';
import { RegistroAnimalBaseDTO } from './dto/registro-animal-base.dto';

@Controller('registro-animal-base')
export class RegistroAnimalBaseController {
  constructor(
    private readonly registroAnimalBaseService: RegistroAnimalBaseService,
  ) {}

  @Post('cadastrarAnimal')
  cadastrarAnimal(@Body() dto: RegistroAnimalBaseDTO) {
    return this.registroAnimalBaseService.registroAnimalBase(dto);
  }
}
