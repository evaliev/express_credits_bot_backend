import { IsNumber, Max, Min, IsOptional } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateCreditApplicationDto {
  @ApiProperty({ description: 'Сумма кредита' })
  @IsNumber()
  @Min(10 ** 5)
  @Max(10 ** 7)
  @IsOptional()
  amount: number;

  @ApiProperty({ description: 'Срок кредита' })
  @IsNumber()
  @Min(1)
  @Max(36)
  @IsOptional()
  term: number;

  @ApiProperty({ description: 'Процентная ставка' })
  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  rate: number;
}
