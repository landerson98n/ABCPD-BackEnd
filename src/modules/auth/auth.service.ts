import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { UserRepository } from 'src/shared/database/repositories/user.repositories';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly usersRepo: UserRepository, private readonly jwtService: JwtService) {}

  async login(loginDto: LoginDto) {
    const { email, senha } = loginDto;

    // Verificando se o usuário existe
    const user = await this.usersRepo.findUnique({
      where: { email },
    });

    if (!user) {
      // Código 401
      throw new UnauthorizedException('Invalid credentials.');
    }

    const isPasswordValid = await compare(senha, user.senha);


    if (!isPasswordValid) {
      // Código 401
      throw new UnauthorizedException('Invalid credentials.');
    }

    // JWT Token

    const payload = { sub: user.id };

    const acessToken = await this.jwtService.signAsync(payload);

    return { acessToken, pessoa: user.pessoa };
  }
}
