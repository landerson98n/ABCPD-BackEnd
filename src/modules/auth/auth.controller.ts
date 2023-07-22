import { Body, Controller, Post, SetMetadata } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Login no sistema
  @Post('login')
  @SetMetadata('IS_PUBLIC', true)
  authenticate(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
