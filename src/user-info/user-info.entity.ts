import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.info)
  user: User;

  @ApiProperty({ description: 'Наименование организации' })
  @Column()
  organizationName: string;

  @ApiProperty({ description: 'ИНН' })
  @Column()
  INN: number;

  @ApiProperty({ description: 'Адрес регистрации ИП' })
  @Column()
  organizationAddress: string;

  @ApiProperty({ description: 'Контактный телефон ИП' })
  @Column()
  organizationTel: string;

  @ApiProperty({ description: 'E-mail для уведомлений' })
  @Column()
  email: string;

  @ApiProperty({ description: 'ФИО собственника' })
  @Column()
  fio: string;

  @ApiProperty({ description: 'Дата рождения' })
  @Column()
  birthDate: string;

  @ApiProperty({ description: 'Серия номер паспорта' })
  @Column()
  passportNumber: number;

  @ApiProperty({ description: 'Дата выдачи паспорта' })
  @Column()
  passportDate: string;

  @ApiProperty({ description: 'Код подразделения' })
  @Column()
  divisionCode: string;

  @ApiProperty({ description: 'Кем выдан' })
  @Column()
  issuedBy: string;

  @ApiProperty({ description: 'Место рождения' })
  @Column()
  birthPlace: string;

  @ApiProperty({ description: 'Адрес регистрации собственника' })
  @Column()
  ownerAddress: string;

  @ApiProperty({ description: 'Номер квартиры' })
  @Column()
  apartmentNumber: number;

  @ApiProperty({ description: 'Контактный телефон' })
  @Column()
  ownerTel: string;
}
