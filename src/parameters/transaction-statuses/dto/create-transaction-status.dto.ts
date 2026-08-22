import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTransactionStatusDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}
