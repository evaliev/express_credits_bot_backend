import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { OwnerInfo } from './owner-info.entity';
import { OwnerInfoDto } from './owner-info.dto';

@Injectable()
export class OwnerInfoService {
  constructor(
    @InjectRepository(OwnerInfo)
    private ownerInfoRepository: Repository<OwnerInfo>,
  ) {}

  async get(userId: string) {
    return await this.ownerInfoRepository.findOne({
      where: {
        userId,
      },
    });
  }

  async create(userId: string, dto: OwnerInfoDto) {
    return await this.ownerInfoRepository.save({
      userId,
      ...dto,
    });
  }

  async update(userId: string, dto: OwnerInfoDto) {
    const {
      raw: [updated],
    } = await this.ownerInfoRepository
      .createQueryBuilder()
      .update(OwnerInfo)
      .set(dto)
      .where('userId = :userId', { userId })
      .returning('*')
      .execute();

    return updated;
  }
}
