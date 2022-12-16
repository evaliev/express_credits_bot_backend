import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApplicationModule } from 'src/application/application.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [ApplicationModule, HttpModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
