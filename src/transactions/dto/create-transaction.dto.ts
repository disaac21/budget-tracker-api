import {
  IsBoolean,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateTransactionDto {
  @IsDateString()
  date: string;

  @IsString()
  @IsNotEmpty()
  business: string;

  @IsInt()
  category: number;

  @IsInt()
  account: number;

  @IsBoolean()
  mandatory: boolean;

  @IsNumber()
  @Min(0.01)
  amount: number;

  @IsOptional()
  @IsString()
  location?: string;

  @IsInt()
  type_id: number;

  @IsInt()
  status_id: number;

  @IsOptional()
  @IsInt()
  payment_method_id?: number;

  @IsOptional()
  @IsString()
  notes?: string;

  @IsInt()
  currency: number;
}
