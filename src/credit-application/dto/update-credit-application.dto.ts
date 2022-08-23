import { IsNumber, Max, Min, IsOptional } from '@nestjs/class-validator';

export class UpdateCreditApplicationDto {
  @IsNumber()
  @Min(10 ** 5)
  @Max(10 ** 7)
  @IsOptional()
  amount: number;

  @IsNumber()
  @Min(1)
  @Max(36)
  @IsOptional()
  term: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  @IsOptional()
  rate: number;
}
