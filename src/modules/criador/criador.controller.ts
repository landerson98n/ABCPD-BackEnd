import { Controller, Body, Post, Get, Delete, Param } from '@nestjs/common';
import { CriadorService } from './criador.service';
import { CriadorDTO, UpdateCriadorDTO } from './dto/criador.dto';

@Controller('criador')
export class CriadorController {
  constructor(private criadorService: CriadorService) {}

  @Post('cadastrarCriador')
  cadastrarCriador(@Body() dto: CriadorDTO) {
    return this.criadorService.cadastrarCriador(dto);
  }

  @Get("getCriadores")
  getCriadores (){
    return this.criadorService.getCriadores()
  }

  @Get("getCriadorById/:id")
  getCriadorById (@Param('id') id: string){
    return this.criadorService.getCriadorBydId(id)
  }

  @Post('updateCriador/:id')
  updateCriador(@Body() dto: UpdateCriadorDTO, @Param('id') id:string ){
    return this.criadorService.updateCriador(dto, id)
  }

  @Delete('deleteCriador/:id')
  deleteCriador(@Param('id') id:string ){
    return this.criadorService.deleteCriador(id)
  }
}
