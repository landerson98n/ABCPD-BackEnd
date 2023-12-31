import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
 
    const isPublic = this.reflector.getAllAndOverride<boolean>('IS_PUBLIC', [context.getClass(), context.getHandler()]);

    if (isPublic) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException("Token não enviado");
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        // Utilizar a palavra secreta do .env
        secret: process.env.JWT_SECRET,
      });
      
      

      // Só enviar o id do usuário
      request['userId'] = payload.sub;
    } catch {
    
      throw new UnauthorizedException("Token invalido");
    }

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
