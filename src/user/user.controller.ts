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
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './user.entity';

@ApiTags('Пользователь')
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Получить всех пользователей' })
  @ApiResponse({ type: [User] })
  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @ApiOperation({ summary: 'Получить одного пользователя' })
  @ApiResponse({ type: User })
  @Get(':id')
  async getOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.getOne(id);
  }

  @ApiOperation({ summary: 'Создание пользователя' })
  @ApiResponse({ type: User })
  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @ApiOperation({ summary: 'Изменение пользователя' })
  @ApiResponse({ type: User })
  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateUserDto,
  ) {
    return await this.userService.update(id, dto);
  }

  @ApiOperation({ summary: 'Удаление пользователя' })
  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }
}
