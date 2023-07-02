import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import {
  AnimalDTO,
  UpdateAnimalDTO,
} from './dto/animal.dto';

@Controller(
  'animal',
)
export class AnimalController {
  constructor(
    private animalService: AnimalService,
  ) {}

  @Post(
    'cadastrarAnimal',
  )
  cadastrarAnimal(
    @Body()
    dto: AnimalDTO,
  ) {
    return this.animalService.cadastrarAnimal(
      dto,
    );
  }

  @Get('getAnimais')
  getAnimais() {
    return this.animalService.getAnimais();
  }

  @Get(
    'getAnimalById/:id',
  )
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.animalService.getAnimalBydId(
      id,
    );
  }

  @Post(
    'updateAnimal/:id',
  )
  updateAnimal(
    @Body()
    dto: UpdateAnimalDTO,
    @Param('id')
    id: string,
  ) {
    return this.animalService.updateAnimal(
      dto,
      id,
    );
  }

  @Delete(
    'deleteAnimal/:id',
  )
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.animalService.deleteAnimal(
      id,
    );
  }
}
