import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ConditionsDto } from './conditions.dto';
import { ConditionsService } from './conditions.service';

@ApiTags('Условия кредита')
@Controller()
export class ConditionsController {
  constructor(private conditionsService: ConditionsService) {}

  @ApiOperation({ summary: 'Получить условия' })
  @ApiOkResponse({ type: ConditionsDto })
  @Get(':userId/conditions')
  async get(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.conditionsService.get(userId);
  }

  @ApiOperation({ summary: 'Отправить условия' })
  @ApiOkResponse({ type: ConditionsDto })
  @Post(':userId/conditions')
  async post(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: ConditionsDto,
  ) {
    const currentConditions = await this.conditionsService.get(userId);

    if (currentConditions) {
      return await this.conditionsService.update(userId, dto);
    }

    return await this.conditionsService.create(userId, dto);
  }
}
