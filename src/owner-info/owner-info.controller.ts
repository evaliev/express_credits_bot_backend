import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OwnerInfoDto } from './owner-info.dto';
import { OwnerInfoService } from './owner-info.service';

@ApiTags('Данные собственника')
@Controller()
export class OwnerInfoController {
  constructor(private ownerInfoService: OwnerInfoService) {}

  @ApiOperation({ summary: 'Получить данные' })
  @ApiOkResponse({ type: OwnerInfoDto })
  @Get(':userId/owner')
  async get(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.ownerInfoService.get(userId);
  }

  @ApiOperation({ summary: 'Отправить данные' })
  @ApiOkResponse({ type: OwnerInfoDto })
  @Post(':userId/owner')
  async post(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: OwnerInfoDto,
  ) {
    const currentOwnerInfo = await this.ownerInfoService.get(userId);

    if (currentOwnerInfo) {
      return await this.ownerInfoService.update(userId, dto);
    }

    return await this.ownerInfoService.create(userId, dto);
  }
}
