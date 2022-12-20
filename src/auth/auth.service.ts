import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ApplicationService } from 'src/application/application.service';
import { InfoByUserDto } from 'src/application/dto/info-by-user.dto';
import { ErrorMessages } from 'src/enums';
import { LoginDto, RegistryDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private applicationService: ApplicationService,
    private readonly httpService: HttpService,
  ) {}

  async login({ chatId }: LoginDto) {
    const activeApplication =
      await this.applicationService.getApplicationByChatId(chatId);

    if (!activeApplication) {
      throw new Error(ErrorMessages.NO_APPLICATION);
    }

    return activeApplication;
  }

  async registry({ chatId, INN }: RegistryDto) {
    const infoByUser = await this.getInfoByUser(INN);

    if (!infoByUser) {
      throw new Error(ErrorMessages.INVALID_INN);
    }

    return await this.applicationService.createApplication(chatId, infoByUser);
  }

  async getInfoByUser(INN: string): Promise<InfoByUserDto | void> {
    const { data: response } = await lastValueFrom(
      this.httpService.post(
        process.env.BY_INN_API_URL,
        {
          query: INN,
        },
        {
          headers: {
            Authorization: process.env.BY_INN_API_TOKEN,
          },
        },
      ),
    );

    if (response.suggestions.length === 0) {
      return;
    }

    const { data, value } = response.suggestions[0];

    return {
      ownerInfo: {
        firstName: data.fio.name || '',
        secondName: data.fio.surname || '',
        middleName: data.fio.patronymic || '',
      },
      indiInfo: {
        INN,
        name: value || '',
      },
    };
  }
}
