import { ApiProperty } from '@nestjs/swagger';
import { ConditionsDto } from 'src/application/dto/conditions.dto';
import { ApplicationStatusses } from 'src/enums';
import { IndiInfoDto } from 'src/application/dto/indi-info.dto';
import { OwnerInfoDto } from 'src/application/dto/owner-info.dto';

export class ApplicationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  chatId: string;

  @ApiProperty()
  status: ApplicationStatusses;

  @ApiProperty()
  conditions: ConditionsDto;

  @ApiProperty()
  indiInfo: IndiInfoDto;

  @ApiProperty()
  ownerInfo: OwnerInfoDto;
}
