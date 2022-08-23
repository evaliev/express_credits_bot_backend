import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCreditApplicationDto } from 'src/credit-application/dto/create-credit-application.dto';
import { UserInfoService } from 'src/user-info/user-info.service';
import { CreateUserInfoDto } from 'src/user-info/dto/create-user-info.dto';
import { UpdateCreditApplicationDto } from 'src/credit-application/dto/update-credit-application.dto';
import { UpdateUserInfoDto } from 'src/user-info/dto/update-user-info.dto';
import { CreditApplication } from 'src/credit-application/credit-application.entity';
import { UserInfo } from 'src/user-info/user-info.entity';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private userInfoService: UserInfoService,
  ) {}

  @ApiOperation({ summary: 'Список всех заявок пользователя' })
  @ApiResponse({ type: CreditApplication, isArray: true })
  @Get(':userId/application')
  async getAllApplications(
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    return await this.userService.getAllApplications(userId);
  }

  @ApiOperation({ summary: 'Заявка пользователя' })
  @ApiResponse({ type: CreditApplication })
  @Get(':userId/application/:applicationId')
  async getOneApplication(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.userService.getOneApplication(applicationId);
  }

  @ApiOperation({ summary: 'Создание заявки пользователя' })
  @ApiResponse({ type: CreditApplication })
  @Post(':userId/application')
  async createApplication(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: CreateCreditApplicationDto,
  ) {
    return await this.userService.createApplication(userId, dto);
  }

  @ApiOperation({ summary: 'Обновление заявки пользователя' })
  @ApiResponse({ type: CreditApplication })
  @Put(':userId/application/:applicationId')
  @ApiResponse({ type: CreditApplication })
  async updateApplication(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
    @Body() dto: UpdateCreditApplicationDto,
  ) {
    return await this.userService.updateApplication(applicationId, dto);
  }

  @ApiOperation({ summary: 'Удаление заявки пользователя' })
  @Delete(':userId/application/:applicationId')
  async deleteApplication(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.userService.deleteApplication(applicationId);
  }

  @ApiOperation({ summary: 'Получить данные пользователя для кредита' })
  @ApiResponse({ type: UserInfo })
  @Get(':userId/info')
  async getInfo(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.userInfoService.getInfo(userId);
  }

  @ApiOperation({ summary: 'Создать данные пользователя для кредита' })
  @ApiResponse({ type: UserInfo })
  @Post(':userId/info')
  async createInfo(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: CreateUserInfoDto,
  ) {
    return await this.userInfoService.createInfo(userId, dto);
  }

  @ApiOperation({ summary: 'Обновить данные пользователя для кредита' })
  @ApiResponse({ type: UserInfo })
  @Put(':userId/info')
  async updateInfo(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: UpdateUserInfoDto,
  ) {
    return await this.userInfoService.updateInfo(userId, dto);
  }
}
