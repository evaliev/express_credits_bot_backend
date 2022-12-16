import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRequestDto } from './auth.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApplicationDto } from 'src/application/dto/application.dto';
import { Recaptcha } from '@nestlab/google-recaptcha';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { ErrorMessages } from 'src/enums';

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
    try {
      return await this.authService.login(dto);
    } catch (err) {
      if (err?.message === ErrorMessages.INVALID_INN) {
        throw new HttpException(err.message, HttpStatus.FORBIDDEN);
      }

      throw err;
    }
  }
}
