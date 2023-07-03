import { IsISO8601 } from 'class-validator';

export class MatrixDTO {
  @IsISO8601()
  data: Date;
}
