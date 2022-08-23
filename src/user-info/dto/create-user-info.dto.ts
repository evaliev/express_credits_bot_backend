import { IsNumber, IsString } from 'class-validator';

export class CreateUserInfoDto {
  @IsString()
  organizationName: string;

  @IsNumber()
  INN: number;

  @IsString()
  organizationAddress: string;

  @IsString()
  organizationTel: string;

  @IsString()
  email: string;

  @IsString()
  fio: string;

  @IsString()
  birthDate: string;

  @IsNumber()
  passportNumber: number;

  @IsString()
  passportDate: string;

  @IsString()
  divisionCode: string;

  @IsString()
  issuedBy: string;

  @IsString()
  birthPlace: string;

  @IsString()
  ownerAddress: string;

  @IsNumber()
  apartmentNumber: number;

  @IsString()
  ownerTel: string;
}
