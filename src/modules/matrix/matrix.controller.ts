import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { MatrixDTO } from './dto/matrix.dto';

@Controller('matrix')
export class MatrixController {
  constructor(private readonly matrixService: MatrixService) {}

  @Post()
  cadastrarAnimal(@Body() dto: MatrixDTO) {
    return this.matrixService.cadastrarMatrix(dto);
  }

  @Get('get-matrix')
  getAnimais() {
    return this.matrixService.getMatrix();
  }

  @Get('get-matrix-byid/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.matrixService.getMatrixBydId(id);
  }

  @Post('update-matrix/:id')
  updateAnimal(
    @Body()
    dto: MatrixDTO,
    @Param('id')
    id: string,
  ) {
    return this.matrixService.updateMatrix(dto, id);
  }

  @Delete('deleteAnimal/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.matrixService.deleteMatrix(id);
  }
}
