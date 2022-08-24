import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserInfoDto {
  @ApiProperty({ description: 'Наименование организации' })
  @IsString()
  organizationName: string;

  @ApiProperty({ description: 'ИНН' })
  @IsNumber()
  INN: number;

  @ApiProperty({ description: 'Адрес регистрации ИП' })
  @IsString()
  organizationAddress: string;

  @ApiProperty({ description: 'Контактный телефон ИП' })
  @IsString()
  organizationTel: string;

  @ApiProperty({ description: 'E-mail для уведомлений' })
  @IsString()
  email: string;

  @ApiProperty({ description: 'ФИО собственника' })
  @IsString()
  fio: string;

  @ApiProperty({ description: 'Дата рождения' })
  @IsString()
  birthDate: string;

  @ApiProperty({ description: 'Серия номер паспорта' })
  @IsNumber()
  passportNumber: number;

  @ApiProperty({ description: 'Дата выдачи паспорта' })
  @IsString()
  passportDate: string;

  @ApiProperty({ description: 'Код подразделения' })
  @IsString()
  divisionCode: string;

  @ApiProperty({ description: 'Кем выдан' })
  @IsString()
  issuedBy: string;

  @ApiProperty({ description: 'Место рождения' })
  @IsString()
  birthPlace: string;

  @ApiProperty({ description: 'Адрес регистрации собственника' })
  @IsString()
  ownerAddress: string;

  @ApiProperty({ description: 'Номер квартиры' })
  @IsNumber()
  apartmentNumber: number;

  @ApiProperty({ description: 'Контактный телефон' })
  @IsString()
  ownerTel: string;
}
