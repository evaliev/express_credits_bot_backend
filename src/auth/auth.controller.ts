import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto, AuthResponseDto } from './auth.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Вход в приложение' })
  @ApiOkResponse({ type: AuthResponseDto })
  @Post()
  async login(@Body() dto: AuthRequestDto) {
    return await this.authService.login(dto);
  }
}
