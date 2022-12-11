import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class OwnerInfoDto {
  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsString()
  secondName: string;

  @ApiProperty()
  @IsString()
  middleName: string;

  @ApiProperty()
  @IsString()
  docNumber: string;

  @ApiProperty()
  @IsString()
  docDate: string;

  @ApiProperty()
  @IsString()
  docIssuedBy: string;

  @ApiProperty()
  @IsString()
  birthPlace: string;

  @ApiProperty()
  @IsString()
  address: string;
}
