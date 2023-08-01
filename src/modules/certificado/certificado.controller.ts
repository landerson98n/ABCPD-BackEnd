import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  UnauthorizedException,
  ParseUUIDPipe,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoDTO } from './dto/certificado.dto';
import { UserService } from '../user/user.service';
import { ActiveUserId } from 'src/shared/decorators/ActiverUserId';

@Controller('certificado')
export class CertificadoController {
  constructor(private readonly certificadoService: CertificadoService, private readonly userService: UserService) {}

  @Post('cadastrar-certificado')
  async cadastrarCertificado(@Body() certificadoDTO: CertificadoDTO, @ActiveUserId() userId: string) {
    const { codigo } = certificadoDTO;

    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    return this.certificadoService.cadastrarCertificado({
      codigo,
    });
  }

  @Get('get-certificado')
  async getAnimais(@ActiveUserId() userId: string) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    return this.certificadoService.getCertificado();
  }

  @Get('get-certificado/:id')
  async getAnimalById(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const exisCertificado = await this.certificadoService.getCertificadoBydId(id);

    if (!exisCertificado) {
      throw new NotFoundException('Certificado não encontrado na base de dados!');
    }

    return this.certificadoService.getCertificadoBydId(id);
  }

  @Put('update-certificado/:id')
  async updateAnimal(
    @Body()
    certificadoDTO: CertificadoDTO,
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    const { codigo } = certificadoDTO;
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const exisCertificado = await this.certificadoService.getCertificadoBydId(id);

    if (!exisCertificado) {
      throw new NotFoundException('Certificado não encontrado na base de dados!');
    }

    return this.certificadoService.updateCertificado({ codigo }, id);
  }

  @Delete('delete-certificado/:id')
  async deleteAnimal(
    @Param('id', ParseUUIDPipe)
    id: string,
    @ActiveUserId() userId: string,
  ) {
    // const user = await this.userService.getUserBydId(userId);

    // if (!(user.pessoa === 'Superintendente')) {
    //   throw new UnauthorizedException();
    // }

    const exisCertificado = await this.certificadoService.getCertificadoBydId(id);

    if (!exisCertificado) {
      throw new NotFoundException('Certificado não encontrado na base de dados!');
    }

    return null;
  }
}
