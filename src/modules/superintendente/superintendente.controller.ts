import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
} from '@nestjs/common';
import { SuperintendenteService } from './superintendente.service';
import { SuperintendenteDTO } from './dto/superintendente.dto';

@Controller(
  'superintendente',
)
export class SuperintendenteController {
  constructor(
    private superintendenteService: SuperintendenteService,
  ) {}

  @Post(
    'cadastrarSuperintendente',
  )
  cadastrarSuperintendente(
    @Body()
    dto: SuperintendenteDTO,
  ) {
    return this.superintendenteService.cadastrarSuperintendente(
      dto,
    );
  }

  @Get(
    'getSuperintendentes',
  )
  getSuperintendentees() {
    return this.superintendenteService.getSuperintendentes();
  }

  @Get(
    'getSuperintendenteById/:id',
  )
  getSuperintendenteById(
    @Param('id')
    id: string,
  ) {
    return this.superintendenteService.getSuperintendenteBydId(
      id,
    );
  }

  @Delete(
    'deleteSuperintendente/:id',
  )
  deleteSuperintendente(
    @Param('id')
    id: string,
  ) {
    return this.superintendenteService.deleteSuperintendente(
      id,
    );
  }
}
