import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  AfterLoad,
  AfterInsert,
  AfterUpdate,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CreditApplication } from 'src/credit-application/credit-application.entity';
import { UserInfo } from 'src/user-info/user-info.entity';

@Entity()
export class User {
  @ApiProperty({
    example: '165cea0a-3372-4273-b77e-f2a16b47b19b',
    description: 'Id',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Телефон пользователя' })
  @Column()
  tel: string;

  @ApiProperty({ description: 'Данные пользователя для оформления кредита' })
  @OneToOne(() => UserInfo, (userInfo) => userInfo.user)
  @JoinColumn()
  info: UserInfo;

  @ApiProperty({ description: 'Заявки пользователя' })
  @OneToMany(
    () => CreditApplication,
    (application: CreditApplication) => application.user,
  )
  applications: CreditApplication[];

  @AfterLoad()
  @AfterInsert()
  @AfterUpdate()
  async nullChecks() {
    if (!this.applications) {
      this.applications = [];
    }
  }
}
