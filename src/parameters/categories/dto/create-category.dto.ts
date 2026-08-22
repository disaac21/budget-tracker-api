import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  emoji: string;

  @IsInt()
  type: number;

  @IsOptional()
  @IsBoolean()
  is_active?: boolean;
}
