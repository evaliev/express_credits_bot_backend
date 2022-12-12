import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class IndiInfoDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  INN: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  tel: string;
}
