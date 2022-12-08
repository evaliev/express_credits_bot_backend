import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class ConditionsDto {
  @ApiProperty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNumber()
  term: number;

  @ApiProperty()
  @IsNumber()
  monthlyPayment: number;
}
