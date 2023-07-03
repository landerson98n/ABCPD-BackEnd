import { IsNotEmpty, IsUUID } from 'class-validator';

export class SuperintendenteDTO {
  @IsUUID()
  @IsNotEmpty()
  userId: string;
}
