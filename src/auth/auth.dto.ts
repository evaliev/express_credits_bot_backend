import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegistryDto {
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

export class LoginDto {
  @ApiProperty()
  @IsString()
  chatId: string;
}
