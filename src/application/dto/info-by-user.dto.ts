import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OwnerInfoByUserDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  secondName: string;

  @ApiProperty()
  @IsString()
  middleName: string;
}

export class IndiInfoByUserDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  INN: string;
}

export class InfoByUserDto {
  @ApiProperty()
  ownerInfo: OwnerInfoByUserDto;

  @ApiProperty()
  indiInfo: IndiInfoByUserDto;
}
