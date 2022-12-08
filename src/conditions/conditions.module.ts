import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConditionsController } from './conditions.controller';
import { Conditions } from './conditions.entity';
import { ConditionsService } from './conditions.service';

@Module({
  imports: [TypeOrmModule.forFeature([Conditions])],
  controllers: [ConditionsController],
  providers: [ConditionsService],
})
export class ConditionsModule {}
