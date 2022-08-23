import { IsNumber, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserInfoDto {
  @ApiProperty({ description: 'Наименование организации' })
  @IsString()
  @IsOptional()
  organizationName: string;

  @ApiProperty({ description: 'ИНН' })
  @IsNumber()
  @IsOptional()
  INN: number;

  @ApiProperty({ description: 'Адрес регистрации ИП' })
  @IsString()
  @IsOptional()
  organizationAddress: string;

  @ApiProperty({ description: 'Контактный телефон ИП' })
  @IsString()
  @IsOptional()
  organizationTel: string;

  @ApiProperty({ description: 'E-mail для уведомлений' })
  @IsString()
  @IsOptional()
  email: string;

  @ApiProperty({ description: 'ФИО собственника' })
  @IsString()
  @IsOptional()
  fio: string;

  @ApiProperty({ description: 'Дата рождения' })
  @IsString()
  @IsOptional()
  birthDate: string;

  @ApiProperty({ description: 'Серия номер паспорта' })
  @IsNumber()
  @IsOptional()
  passportNumber: number;

  @ApiProperty({ description: 'Дата выдачи паспорта' })
  @IsString()
  @IsOptional()
  passportDate: string;

  @ApiProperty({ description: 'Код подразделения' })
  @IsString()
  @IsOptional()
  divisionCode: string;

  @ApiProperty({ description: 'Кем выдан' })
  @IsString()
  @IsOptional()
  issuedBy: string;

  @ApiProperty({ description: 'Место рождения' })
  @IsString()
  @IsOptional()
  birthPlace: string;

  @ApiProperty({ description: 'Адрес регистрации собственника' })
  @IsString()
  @IsOptional()
  ownerAddress: string;

  @ApiProperty({ description: 'Номер квартиры' })
  @IsNumber()
  @IsOptional()
  apartmentNumber: number;

  @ApiProperty({ description: 'Контактный телефон' })
  @IsString()
  @IsOptional()
  ownerTel: string;
}
