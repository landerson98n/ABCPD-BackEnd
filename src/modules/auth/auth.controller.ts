import { Body, Controller, Post, SetMetadata, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Login no sistema
  @Post('login')
  @SetMetadata('IS_PUBLIC', true)
  authenticate(@Body() loginDto: LoginDto) {
    const { email, senha } = loginDto;

    if (email === '' || senha === '') {
      // Código 401
      throw new UnauthorizedException('Existe um campo vazio.');
    }

    return this.authService.login(loginDto);
  }
}
