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
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateCreditApplicationDto } from 'src/credit-application/dto/create-credit-application.dto';
import { UserInfoService } from 'src/user-info/user-info.service';
import { CreateUserInfoDto } from 'src/user-info/dto/create-user-info.dto';
import { UpdateCreditApplicationDto } from 'src/credit-application/dto/update-credit-application.dto';
import { UpdateUserInfoDto } from 'src/user-info/dto/update-user-info.dto';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private userInfoService: UserInfoService,
  ) {}

  @ApiResponse({ type: User })
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }

  @ApiOperation({ summary: 'Список всех заявок пользователя' })
  @Get(':userId/application')
  async getAllApplications(
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    return await this.userService.getAllApplications(userId);
  }

  @ApiOperation({ summary: 'Заявка пользователя' })
  @Get(':userId/application/:applicationId')
  async getOneApplication(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.userService.getOneApplication(applicationId);
  }

  @ApiOperation({ summary: 'Создание заявки пользователя' })
  @Post(':userId/application')
  async createApplication(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: CreateCreditApplicationDto,
  ) {
    return await this.userService.createApplication(userId, dto);
  }

  @Put(':userId/application/:applicationId')
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
  @Get(':userId/info')
  async getInfo(@Param('userId', new ParseUUIDPipe()) userId: string) {
    return await this.userInfoService.getInfo(userId);
  }

  @ApiOperation({ summary: 'Создать данные пользователя для кредита' })
  @Post(':userId/info')
  async createInfo(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: CreateUserInfoDto,
  ) {
    return await this.userInfoService.createInfo(userId, dto);
  }

  @ApiOperation({ summary: 'Обновить данные пользователя для кредита' })
  @Put(':userId/info')
  async updateInfo(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: UpdateUserInfoDto,
  ) {
    return await this.userInfoService.updateInfo(userId, dto);
  }
}
