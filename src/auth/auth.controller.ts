import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegistryDto } from './auth.dto';
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

  @Post('login')
  @HttpCode(200)
  @ApiOperation({ summary: 'Вход в приложение (существующая заявка)' })
  @ApiOkResponse({ type: ApplicationDto })
  async login(
    @Res({ passthrough: true }) response: Response,
    @Body() dto: LoginDto,
  ) {
    try {
      return await this.authService.login(dto);
    } catch (err) {
      if (err?.message === ErrorMessages.NO_APPLICATION) {
        response.status(HttpStatus.NO_CONTENT);
        return;
      }

      throw err;
    }
  }

  @Post('registry')
  @HttpCode(200)
  @Recaptcha()
  @ApiOperation({ summary: 'Вход в приложение (новая заявка)' })
  @ApiOkResponse({ type: ApplicationDto })
  async registry(@Body() dto: RegistryDto) {
    try {
      return await this.authService.registry(dto);
    } catch (err) {
      if (err?.message === ErrorMessages.INVALID_INN) {
        throw new HttpException(err.message, HttpStatus.FORBIDDEN);
      }

      throw err;
    }
  }
}
