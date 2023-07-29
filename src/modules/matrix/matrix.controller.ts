import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UnauthorizedException,
  ParseUUIDPipe,
  Put,
  NotFoundException,
} from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { MatrixDTO } from './dto/matrix.dto';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';
import { UserService } from '../user/user.service';

@Controller('matrix')
export class MatrixController {
  constructor(private readonly matrixService: MatrixService, private readonly userService: UserService) {}

  @Post('cadastrar-matrix')
  async cadastrarAnimal(@Body() matrixDTO: MatrixDTO, @ActiveUserId() userId: string) {
    const { data } = matrixDTO;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.matrixService.cadastrarMatrix({
      data,
    });
  }

  @Get('get-matrix')
  async getAnimais(@ActiveUserId() userId: string) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.matrixService.getMatrix();
  }

  @Get('get-matrix/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    return this.matrixService.getMatrixBydId(id);
  }

  @Put('update-matrix/:id')
  async updateAnimal(
    @Body()
    matrixDTO: MatrixDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const { data } = matrixDTO;

    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const exisMatriz = await this.matrixService.getMatrixBydId(id);

    if (!exisMatriz) {
      throw new NotFoundException('Matriz não encontrada na base de dados!');
    }

    return this.matrixService.updateMatrix(
      {
        data,
      },
      id,
    );
  }

  @Delete('delete-matrix/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const user = await this.userService.getUserBydId(userId);

    if (!(user.pessoa === 'Superintendente')) {
      throw new UnauthorizedException();
    }

    const exisMatriz = await this.matrixService.getMatrixBydId(id);

    if (!exisMatriz) {
      throw new NotFoundException('Matriz não encontrada na base de dados!');
    }

    await this.matrixService.deleteMatrix(id);

    return null;
  }
}
