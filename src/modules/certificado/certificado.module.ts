import { Module } from '@nestjs/common';
import { CertificadoService } from './certificado.service';
import { CertificadoController } from './certificado.controller';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [CertificadoController],
  providers: [CertificadoService],
  imports: [UserModule],
})
export class CertificadoModule {}
