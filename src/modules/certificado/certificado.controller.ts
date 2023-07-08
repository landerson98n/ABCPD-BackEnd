import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoDTO } from './dto/certificado.dto';

@Controller('certificado')
export class CertificadoController {
  constructor(private readonly certificadoService: CertificadoService) {}

  @Post()
  cadastrarCertificado(@Body() dto: CertificadoDTO) {
    return this.certificadoService.cadastrarCertificado(dto);
  }

  @Get('get-certificado')
  getAnimais() {
    return this.certificadoService.getCertificado();
  }

  @Get('get-certificado-byid/:id')
  getAnimalById(
    @Param('id')
    id: string,
  ) {
    return this.certificadoService.getCertificadoBydId(id);
  }

  @Post('update-certificado/:id')
  updateAnimal(
    @Body()
    dto: CertificadoDTO,
    @Param('id')
    id: string,
  ) {
    return this.certificadoService.updateCertificado(dto, id);
  }

  @Delete('delete-certificado/:id')
  deleteAnimal(
    @Param('id')
    id: string,
  ) {
    return this.certificadoService.deleteCertificado(id);
  }
}
