import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConditionsDto } from 'src/application/dto/conditions.dto';
import { ApplicationStatusses } from 'src/enums';
import { IndiInfoDto } from 'src/application/dto/indi-info.dto';
import { OwnerInfoDto } from 'src/application/dto/owner-info.dto';
import { Application } from './entities/application.entity';
import { Conditions } from './entities/conditions.entity';
import { OwnerInfo } from './entities/owner-info.entity';
import { IndiInfo } from './entities/indi-info.entity';
import {
  initialApplication,
  initialConditions,
  initialIndiInfo,
  initialOwnerInfo,
} from 'src/helpers';
import {
  IndiInfoByUserDto,
  InfoByUserDto,
  OwnerInfoByUserDto,
} from './dto/info-by-user.dto';

@Injectable()
export class ApplicationService {
  constructor(
    @InjectRepository(Application)
    private applicationRepository: Repository<Application>,
    @InjectRepository(Conditions)
    private conditionsRepository: Repository<Conditions>,
    @InjectRepository(OwnerInfo)
    private ownerInfoRepository: Repository<OwnerInfo>,
    @InjectRepository(IndiInfo)
    private indiInfoRepository: Repository<IndiInfo>,
  ) {}

  async getApplicationByChatId(chatId: string) {
    return await this.applicationRepository.findOne({
      where: { chatId },
      relations: ['conditions', 'ownerInfo', 'indiInfo'],
    });
  }

  async getApplicationById(applicationId: string) {
    return await this.applicationRepository.findOne({
      where: { id: applicationId },
      relations: ['conditions', 'ownerInfo', 'indiInfo'],
    });
  }

  async getApplicationRelationsIds(applicationId: string) {
    const application = await this.getApplicationById(applicationId);

    return {
      conditionsId: application.conditions.id,
      ownerInfoId: application.ownerInfo.id,
      indiInfoId: application.indiInfo.id,
    };
  }

  async createApplication(chatId: string, infoByUser: InfoByUserDto) {
    const [conditions, ownerInfo, indiInfo] = await Promise.all([
      this.createConditions(),
      this.createOwnerInfo(infoByUser.ownerInfo),
      this.createIndiInfo(infoByUser.indiInfo),
    ]);

    const application = this.applicationRepository.create();
    application.chatId = chatId;
    application.status = initialApplication.status;
    application.conditions = conditions;
    application.ownerInfo = ownerInfo;
    application.indiInfo = indiInfo;

    await this.applicationRepository.save(application);

    return await this.getApplicationByChatId(chatId);
  }

  async createConditions() {
    return await this.conditionsRepository.save({ ...initialConditions });
  }

  async createOwnerInfo(ownerInfoByUser: OwnerInfoByUserDto) {
    return await this.ownerInfoRepository.save({
      ...initialOwnerInfo,
      ...ownerInfoByUser,
    });
  }

  async createIndiInfo(indiInfoByUser: IndiInfoByUserDto) {
    return await this.indiInfoRepository.save({
      ...initialIndiInfo,
      ...indiInfoByUser,
    });
  }

  async changeStatus(applicationId: string, status: ApplicationStatusses) {
    await this.applicationRepository
      .createQueryBuilder()
      .update(Application)
      .set({ status })
      .where('id = :id', { id: applicationId })
      .returning('*')
      .execute();

    return await this.getApplicationById(applicationId);
  }

  async updateConditions(applicationId: string, conditions: ConditionsDto) {
    const { conditionsId } = await this.getApplicationRelationsIds(
      applicationId,
    );

    await this.conditionsRepository
      .createQueryBuilder()
      .update(Conditions)
      .set(conditions)
      .where('id = :id', { id: conditionsId })
      .returning('*')
      .execute();

    return await this.getApplicationById(applicationId);
  }

  async updateOwnerInfo(applicationId: string, ownerInfo: OwnerInfoDto) {
    const { ownerInfoId } = await this.getApplicationRelationsIds(
      applicationId,
    );

    await this.ownerInfoRepository
      .createQueryBuilder()
      .update(OwnerInfo)
      .set(ownerInfo)
      .where('id = :id', { id: ownerInfoId })
      .returning('*')
      .execute();

    return await this.getApplicationById(applicationId);
  }

  async updateIndiInfo(applicationId: string, indiInfo: IndiInfoDto) {
    const { indiInfoId } = await this.getApplicationRelationsIds(applicationId);

    await this.indiInfoRepository
      .createQueryBuilder()
      .update(IndiInfo)
      .set(indiInfo)
      .where('id = :id', { id: indiInfoId })
      .returning('*')
      .execute();

    return await this.getApplicationById(applicationId);
  }

  async finish(applicationId: string) {
    //TODO отправить данные на сервис банка
    //TODO отправить QR-код в чат
  }
}
