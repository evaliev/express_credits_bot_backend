import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateCreditApplicationDto } from 'src/credit-application/dto/create-credit-application.dto';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ type: User })
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }

  @Get(':userId/application')
  async getAllApplications(
    @Param('userId', new ParseUUIDPipe()) userId: string,
  ) {
    return await this.userService.getAllApplications(userId);
  }

  @Get(':userId/application/:applicationId')
  async getOneApplication(
    @Param('applicationId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.userService.getOneApplication(applicationId);
  }

  @Post(':userId/application')
  async createApplication(
    @Param('userId', new ParseUUIDPipe()) userId: string,
    @Body() dto: CreateCreditApplicationDto,
  ) {
    return await this.userService.createApplication(userId, dto);
  }

  @Delete(':userId/application/:applicationId')
  async deleteApplication(
    @Param('userId', new ParseUUIDPipe()) applicationId: string,
  ) {
    return await this.userService.deleteApplication(applicationId);
  }
}
