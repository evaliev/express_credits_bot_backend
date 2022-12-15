import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './auth.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationDto } from 'src/application/dto/application.dto';
import { Recaptcha } from '@nestlab/google-recaptcha';

@Controller('auth')
@ApiTags('Авторизация')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  @HttpCode(200)
  @Recaptcha()
  @ApiOperation({ summary: 'Вход в приложение' })
  @ApiOkResponse({ type: ApplicationDto })
  async login(@Body() dto: AuthRequestDto) {
    return await this.authService.login(dto);
  }
}
