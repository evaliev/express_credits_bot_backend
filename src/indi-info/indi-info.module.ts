import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndiInfoController } from './indi-info.controller';
import { IndiInfo } from './indi-info.entity';
import { IndiInfoService } from './indi-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([IndiInfo])],
  controllers: [IndiInfoController],
  providers: [IndiInfoService],
})
export class IndiInfoModule {}
