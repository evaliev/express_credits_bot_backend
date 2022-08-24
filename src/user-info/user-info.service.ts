import { Injectable } from '@nestjs/common';
import { UserInfo } from './user-info.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInfoDto } from './dto/create-user-info.dto';
import { UpdateUserInfoDto } from './dto/update-user-info.dto';

@Injectable()
export class UserInfoService {
  constructor(
    @InjectRepository(UserInfo)
    private userInfoRepository: Repository<UserInfo>,
  ) {}

  async getInfo(userId: string) {
    return await this.userInfoRepository.findOneBy({ userId });
  }

  async createInfo(userId: string, dto: CreateUserInfoDto) {
    return await this.userInfoRepository.save({ userId, ...dto });
  }

  async updateInfo(userId: string, dto: UpdateUserInfoDto) {
    const {
      raw: [updated],
    } = await this.userInfoRepository
      .createQueryBuilder()
      .update(UserInfo)
      .set(dto)
      .where('userId = :userId', { userId })
      .returning('*')
      .execute();

    return updated;
  }
}
