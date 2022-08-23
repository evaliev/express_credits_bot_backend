import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from './user-info.entity';
import { UserInfoService } from './user-info.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  providers: [UserInfoService],
  exports: [UserInfoService],
})
export class UserInfoModule {}
