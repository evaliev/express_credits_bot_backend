import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreditApplication } from './credit-application.entity';
import { CreateCreditApplicationDto } from './dto/create-credit-application.dto';

@Injectable()
export class CreditApplicationService {
  constructor(
    @InjectRepository(CreditApplication)
    private creditApplicationRepository: Repository<CreditApplication>,
  ) {}

  async getOne(id: string) {
    return await this.creditApplicationRepository.findOneBy({ id });
  }

  async create(userId: string, dto: CreateCreditApplicationDto) {
    return await this.creditApplicationRepository.save({ userId, ...dto });
  }

  async delete(applicationId: string) {
    const { affected: deleted } = await this.creditApplicationRepository.delete(
      applicationId,
    );

    return { deleted };
  }
}
