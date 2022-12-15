import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthRequestDto {
  @ApiProperty()
  @IsString()
  INN: string;

  @ApiProperty()
  @IsString()
  chatId: string;

  @ApiProperty()
  @IsString()
  reCaptchaToken: string | null;
}
