import { plainToInstance } from 'class-transformer';
import { IsString, IsNotEmpty, validateSync } from 'class-validator';

// Tipagem do tokens
class Env {
  @IsString()
  @IsNotEmpty()
  jwtSecret: string;

  @IsString()
  @IsNotEmpty()
  dbURL: string;
}

// plain to instance é utilizando para validar a função
export const env: Env = plainToInstance(Env, {
  jwtSecret: process.env.JWT_SECRET,
  dbURL: process.env.DATABASE_URL,
});

// Executar a validação
const errors = validateSync(Env);

if (errors.length > 0) {
  // Transformar um array para tipo de json
  throw new Error(JSON.stringify(errors, null, 2));
}
