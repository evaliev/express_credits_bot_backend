import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { CreditApplication } from 'src/credit-application/credit-application.entity';

@Entity()
export class User {
  @ApiProperty({
    example: '165cea0a-3372-4273-b77e-f2a16b47b19b',
    description: '',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ example: '+79999999999', description: 'Телефон пользователя' })
  @Column()
  tel: string;

  @ApiProperty({
    example: '',
    description: 'Заявки пользователя',
  })
  @OneToMany(
    () => CreditApplication,
    (application: CreditApplication) => application.user,
  )
  applications: CreditApplication[];
}
