import { Controller, Post, Body } from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { MatrixDTO } from './dto/matrix.dto';

@Controller('matrix')
export class MatrixController {
  constructor(private readonly matrixService: MatrixService) {}

  @Post()
  cadastrarAnimal(@Body() dto: MatrixDTO) {
    return this.matrixService.cadastrarMatrix(dto);
  }
}

