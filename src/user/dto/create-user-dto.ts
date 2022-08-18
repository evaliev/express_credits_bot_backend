import { IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: '+79999999999',
    description: 'Телефон пользователя',
  })
  @IsString()
  tel: string;
}
