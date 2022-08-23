import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user-dto';
import { CreateCreditApplicationDto } from 'src/credit-application/dto/create-credit-application.dto';
import { CreditApplicationService } from 'src/credit-application/credit-application.service';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private creditApplicationService: CreditApplicationService,
  ) {}

  async getOneByTel(tel: string) {
    return await this.userRepository.findOne({
      where: {
        tel,
      },
    });
  }

  async create(dto: CreateUserDto) {
    return await this.userRepository.save(dto);
  }

  async delete(id: string) {
    const { affected: deleted } = await this.userRepository.delete(id);

    return { deleted };
  }

  async getAllApplications(userId: string) {
    const { applications } = await this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['applications'],
    });

    return applications;
  }

  async getOneApplication(applicationId: string) {
    return await this.creditApplicationService.getOne(applicationId);
  }

  async createApplication(userId: string, dto: CreateCreditApplicationDto) {
    return await this.creditApplicationService.create(userId, dto);
  }

  async updateApplication(
    applicationId: string,
    dto: CreateCreditApplicationDto,
  ) {
    return await this.creditApplicationService.update(applicationId, dto);
  }

  async deleteApplication(applicationId: string) {
    return await this.creditApplicationService.delete(applicationId);
  }
}
