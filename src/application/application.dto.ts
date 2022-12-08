import { ApiProperty } from '@nestjs/swagger';
import { ConditionsDto } from 'src/conditions/conditions.dto';
import { IndiInfoDto } from 'src/indi-info/indi-info.dto';
import { OwnerInfoDto } from 'src/owner-info/owner-info.dto';

export class ApplicationDto {
  @ApiProperty()
  conditions: ConditionsDto;

  @ApiProperty()
  indiInfo: IndiInfoDto;

  @ApiProperty()
  ownerInfo: OwnerInfoDto;
}
