import {
  Body,
  Controller,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationStatusses } from 'src/enums';
import { ApplicationService } from './application.service';
import { ApplicationDto } from './dto/application.dto';
import { HttpCode } from '@nestjs/common/decorators';
import { ConditionsDto } from './dto/conditions.dto';
import { OwnerInfoDto } from './dto/owner-info.dto';
import { IndiInfoDto } from './dto/indi-info.dto';

@Controller('application')
@ApiTags('Заявка на кредит')
export class ApplicationController {
  constructor(private applicationService: ApplicationService) {}

  @Patch(':applicationId/action/:status')
  @HttpCode(200)
  @ApiOperation({ summary: 'Изменить статус' })
  @ApiOkResponse({ type: ApplicationDto })
  async changeStatus(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
    @Param('status') status: ApplicationStatusses,
  ) {
    return await this.applicationService.changeStatus(applicationId, status);
  }

  @Patch(':applicationId/conditions')
  @HttpCode(200)
  @ApiOperation({ summary: 'Обновить условия' })
  @ApiOkResponse({ type: ApplicationDto })
  async updateConditions(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
    @Body() conditions: ConditionsDto,
  ) {
    return await this.applicationService.updateConditions(
      applicationId,
      conditions,
    );
  }

  @Patch(':applicationId/owner')
  @HttpCode(200)
  @ApiOperation({ summary: 'Обновить данные собственника' })
  @ApiOkResponse({ type: ApplicationDto })
  async updateOwnerInfo(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
    @Body() ownerInfo: OwnerInfoDto,
  ) {
    return await this.applicationService.updateOwnerInfo(
      applicationId,
      ownerInfo,
    );
  }

  @Patch(':applicationId/indi')
  @HttpCode(200)
  @ApiOperation({ summary: 'Обновить данные ИП' })
  @ApiOkResponse({ type: ApplicationDto })
  async updateIndiInfo(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
    @Body() indiInfo: IndiInfoDto,
  ) {
    return await this.applicationService.updateIndiInfo(
      applicationId,
      indiInfo,
    );
  }

  @Post(':applicationId/submit')
  @HttpCode(200)
  @ApiOperation({ summary: 'Отправить на рассмотрение' })
  async submit(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.applicationService.submit(applicationId);
  }
}
