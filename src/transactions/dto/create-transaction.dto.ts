import {
  IsBoolean,
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { $Enums } from '@prisma/client';

export class CreateTransactionDto {
  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsString()
  category: string;

  @IsString()
  account: string;

  @IsBoolean()
  mandatory: boolean;

  @IsNumber()
  amount: number;

  @IsEnum($Enums.TransactionType)
  type: $Enums.TransactionType;
}
