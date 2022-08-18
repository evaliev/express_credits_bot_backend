import { IsString } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsString()
  tel: string;
}