import { Body, Controller, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationDto } from './application.dto';
import { ApplicationService } from './application.service';

@ApiTags('Заявка на кредит')
@Controller()
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @ApiOperation({ summary: 'Отправить заявку' })
  @ApiOkResponse({ type: ApplicationDto })
  @Post(':userId/application')
  async post(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: ApplicationDto,
  ) {
    return await this.applicationService.create(userId, dto);
  }
}
