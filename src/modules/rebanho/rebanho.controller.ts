import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { RebanhoService } from './rebanho.service';
import { RebanhoDTO, UpdateRebanhoDTO } from './dto';

@Controller('rebanho')
export class RebanhoController {
  constructor(private rebanhoService: RebanhoService) {}

  @Post('cadastrarRebanho')
  cadastrarRebanho(
    @Body()
    dto: RebanhoDTO,
  ) {
    return this.rebanhoService.cadastrarRebanho(dto);
  }

  @Get('getRebanhos')
  getRebanhos() {
    return this.rebanhoService.getRebanhos();
  }

  @Get('getRebanhoById/:id')
  getRebanhoById(
    @Param('id')
    id: string,
  ) {
    return this.rebanhoService.getRebanhoBydId(id);
  }

  @Post('updateRebanho/:id')
  updateRebanho(
    @Body()
    dto: UpdateRebanhoDTO,
    @Param('id')
    id: string,
  ) {
    return this.rebanhoService.updateRebanho(dto, id);
  }

  @Delete('deleteRebanho/:id')
  deleteRebanho(
    @Param('id')
    id: string,
  ) {
    return this.rebanhoService.deleteRebanho(id);
  }
}
