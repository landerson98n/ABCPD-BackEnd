import { Module } from '@nestjs/common';
import { SuperintendenteController } from './superintendente.controller';
import { SuperintendenteService } from './superintendente.service';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [SuperintendenteController],
  providers: [SuperintendenteService],
})
export class SuperintendenteModule {}
