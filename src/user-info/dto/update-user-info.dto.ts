import { IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdateUserInfoDto {
  @IsString()
  @IsOptional()
  organizationName: string;

  @IsNumber()
  @IsOptional()
  INN: number;

  @IsString()
  @IsOptional()
  organizationAddress: string;

  @IsString()
  @IsOptional()
  organizationTel: string;

  @IsString()
  @IsOptional()
  email: string;

  @IsString()
  @IsOptional()
  fio: string;

  @IsString()
  @IsOptional()
  birthDate: string;

  @IsNumber()
  @IsOptional()
  passportNumber: number;

  @IsString()
  @IsOptional()
  passportDate: string;

  @IsString()
  @IsOptional()
  divisionCode: string;

  @IsString()
  @IsOptional()
  issuedBy: string;

  @IsString()
  @IsOptional()
  birthPlace: string;

  @IsString()
  @IsOptional()
  ownerAddress: string;

  @IsNumber()
  @IsOptional()
  apartmentNumber: number;

  @IsString()
  @IsOptional()
  ownerTel: string;
}
