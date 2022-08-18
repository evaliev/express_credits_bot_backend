import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user-dto';
import { UpdateUserDto } from './dto/update-user-dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAll() {
    return await this.userService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.getOne(id);
  }

  @Post()
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateUserDto
  ) {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id', new ParseUUIDPipe()) id: string) {
    return await this.userService.delete(id);
  }
}
