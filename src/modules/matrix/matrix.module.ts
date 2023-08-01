import { Module } from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { MatrixController } from './matrix.controller';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [MatrixController],
  providers: [MatrixService],
  imports: [UserModule],
  exports: [MatrixService],
})
export class MatrixModule {}
