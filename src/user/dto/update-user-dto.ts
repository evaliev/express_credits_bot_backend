import { IsString } from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsString()
  tel: string;
}