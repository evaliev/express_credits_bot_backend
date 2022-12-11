import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { Application } from './entities/application.entity';
import { Conditions } from './entities/conditions.entity';
import { IndiInfo } from './entities/indi-info.entity';
import { OwnerInfo } from './entities/owner-info.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Application, Conditions, OwnerInfo, IndiInfo]),
  ],
  controllers: [ApplicationController],
  providers: [ApplicationService],
  exports: [ApplicationService],
})
export class ApplicationModule {}
