import { IsNumber, Max, Min } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCreditApplicationDto {
  @ApiProperty({ description: 'Сумма кредита' })
  @IsNumber()
  @Min(10 ** 5)
  @Max(10 ** 7)
  amount: number;

  @ApiProperty({ description: 'Срок кредита' })
  @IsNumber()
  @Min(1)
  @Max(36)
  term: number;

  @ApiProperty({ description: 'Процентная ставка' })
  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;
}
