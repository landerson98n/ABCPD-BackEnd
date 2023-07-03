import { Controller, Post, Body } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoDTO } from './dto/certificado.dto';

@Controller('certificado')
export class CertificadoController {
  constructor(private readonly certificadoService: CertificadoService) {}

  @Post()
  cadastrarAnimal(@Body() dto: CertificadoDTO) {
    return this.certificadoService.cadastrarAnimal(dto);
  }
}
