import { Injectable } from '@nestjs/common';
import { ApplicationService } from 'src/application/application.service';
import { AuthRequestDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private applicationService: ApplicationService) {}

  async login({ chatId }: AuthRequestDto) {
    return await this.applicationService.getApplication(chatId);
  }
}
