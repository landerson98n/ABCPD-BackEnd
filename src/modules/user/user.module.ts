import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
  providers: [UserService],
  controllers: [UserController],
  imports: [DatabaseModule],
  exports: [UserService],
})
export class UserModule {}
