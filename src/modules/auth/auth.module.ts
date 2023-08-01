import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { env } from 'src/shared/config/env';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      // Isso não pode ser subido para github
      secret: env.jwtSecret,
      // expiresIn: Tempo de validação
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
