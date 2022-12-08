import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerInfoController } from './owner-info.controller';
import { OwnerInfo } from './owner-info.entity';
import { OwnerInfoService } from './owner-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([OwnerInfo])],
  controllers: [OwnerInfoController],
  providers: [OwnerInfoService],
})
export class OwnerInfoModule {}
