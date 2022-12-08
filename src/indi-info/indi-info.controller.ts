import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IndiInfoDto } from './indi-info.dto';
import { IndiInfoService } from './indi-info.service';

@ApiTags('Данные ИП')
@Controller()
export class IndiInfoController {
  constructor(private indiInfoService: IndiInfoService) {}

  @ApiOperation({ summary: 'Получить данные' })
  @ApiOkResponse({ type: IndiInfoDto })
  @Get(':userId/indi')
  async get(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.indiInfoService.get(userId);
  }

  @ApiOperation({ summary: 'Отправить данные' })
  @ApiOkResponse({ type: IndiInfoDto })
  @Post(':userId/indi')
  async post(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: IndiInfoDto,
  ) {
    const currentOwnerInfo = await this.indiInfoService.get(userId);

    if (currentOwnerInfo) {
      return await this.indiInfoService.update(userId, dto);
    }

    return await this.indiInfoService.create(userId, dto);
  }
}
