import { Injectable } from '@nestjs/common';
import { ApplicationDto } from './application.dto';

@Injectable()
export class ApplicationService {
  async create(userId: string, dto: ApplicationDto) {
    //TODO отправка данных на сервис банка
  }
}
