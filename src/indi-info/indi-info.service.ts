import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IndiInfo } from './indi-info.entity';
import { IndiInfoDto } from './indi-info.dto';

@Injectable()
export class IndiInfoService {
  constructor(
    @InjectRepository(IndiInfo)
    private indiInfoRepository: Repository<IndiInfo>,
  ) {}

  async get(userId: string) {
    return await this.indiInfoRepository.findOne({
      where: {
        userId,
      },
    });
  }

  async create(userId: string, dto: IndiInfoDto) {
    return await this.indiInfoRepository.save({
      userId,
      ...dto,
    });
  }

  async update(userId: string, dto: IndiInfoDto) {
    const {
      raw: [updated],
    } = await this.indiInfoRepository
      .createQueryBuilder()
      .update(IndiInfo)
      .set(dto)
      .where('userId = :userId', { userId })
      .returning('*')
      .execute();

    return updated;
  }
}
