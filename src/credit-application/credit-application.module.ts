import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditApplicationController } from './credit-application.controller';
import { CreditApplication } from './credit-application.entity';
import { CreditApplicationService } from './credit-application.service';

@Module({
  imports: [TypeOrmModule.forFeature([CreditApplication])],
  controllers: [CreditApplicationController],
  providers: [CreditApplicationService]
})
export class CreditApplicationModule {}
