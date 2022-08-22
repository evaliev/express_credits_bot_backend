import { IsNumber, Max, Min } from '@nestjs/class-validator';

export class CreateCreditApplicationDto {
  @IsNumber()
  @Min(10 ** 5)
  @Max(10 ** 7)
  amount: number;

  @IsNumber()
  @Min(1)
  @Max(36)
  term: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;
}
