import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Conditions } from './conditions.entity';
import { ConditionsDto } from './conditions.dto';

@Injectable()
export class ConditionsService {
  constructor(
    @InjectRepository(Conditions)
    private conditionsRepository: Repository<Conditions>,
  ) {}

  async get(userId: string) {
    return await this.conditionsRepository.findOne({
      where: {
        userId,
      },
    });
  }

  async create(userId: string, dto: ConditionsDto) {
    return await this.conditionsRepository.save({
      userId,
      ...dto,
    });
  }

  async update(userId: string, dto: ConditionsDto) {
    const {
      raw: [updated],
    } = await this.conditionsRepository
      .createQueryBuilder()
      .update(Conditions)
      .set(dto)
      .where('userId = :userId', { userId })
      .returning('*')
      .execute();

    return updated;
  }
}
