import { ExecutionContext, UnauthorizedException, createParamDecorator } from '@nestjs/common';

// createParamDecorator
// data é um valor enviado dentro do paramentros.
// ExecutionContext é mesma coisa que foi utilizado no auth.guard.ts
export const ActiveUserId = createParamDecorator<undefined>((data, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const userId = request.userId;

  if (!userId) {
    throw new UnauthorizedException("User Id invalido");
  }

  return userId;
});
