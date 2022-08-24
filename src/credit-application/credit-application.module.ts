import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreditApplication } from './credit-application.entity';
import { CreditApplicationService } from './credit-application.service';

@Module({
  imports: [TypeOrmModule.forFeature([CreditApplication])],
  providers: [CreditApplicationService],
  exports: [CreditApplicationService],
})
export class CreditApplicationModule {}
