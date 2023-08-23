import { IsUUID, IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class PaymentDTO {
  @IsString()
  value: string;
  @IsString()
  @IsOptional()
  holderName: string;
  @IsString()
  @IsOptional()
  number: string;
  @IsString()
  @IsOptional()
  expiryMonth: string;
  @IsString()
  @IsOptional()
  expiryYear: string;
  @IsString()
  @IsOptional()
  ccv: string;
  @IsString()
  @IsOptional()
  remoteIp: string;
  @IsString()
  @IsOptional()
  billingType: string;
}