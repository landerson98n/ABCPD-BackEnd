import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { RegistroAnimalBaseService } from './registro-animal-base.service';
import { RegistroAnimalBaseDTO } from './dto/registro-animal-base.dto';

@Controller('registro-animal-base')
export class RegistroAnimalBaseController {
  constructor(private readonly registroAnimalBaseService: RegistroAnimalBaseService) {}

  @Post('cadastrar-animal-base')
  cadastrarAnimal(@Body() dto: RegistroAnimalBaseDTO) {
    return this.registroAnimalBaseService.registroAnimalBase(dto);
  }

  @Get('get-registro-animais-bases')
  getAnimais() {
    return this.registroAnimalBaseService.getRegistroAnimaisBases();
  }

  @Get('get-registro-animal-base-byid/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.registroAnimalBaseService.getRegistroAnimalBaseById(id);
  }

  @Post('update-registro-animal-base/:id')
  updateAnimal(
    @Body()
    dto: RegistroAnimalBaseDTO,
    @Param('id')
    id: string,
  ) {
    return this.registroAnimalBaseService.updateRegistroAnimalBase(dto, id);
  }

  @Delete('delete-registro-animal-base/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.registroAnimalBaseService.deleteRegistroAnimalBase(id);
  }
}
