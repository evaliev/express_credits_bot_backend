import { Transform } from 'class-transformer';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ example: '1', description: 'Версия пользователя' })
  @VersionColumn()
  version: number;

  @ApiProperty({
    example: '2022-08-18T12:35:56.015Z',
    description: 'Время создания пользователя',
  })
  @CreateDateColumn()
  @Transform(({ value }) => value.getTime())
  createdAt: Date;

  @ApiProperty({
    example: '2022-08-18T12:35:56.015Z',
    description: 'Время обновления пользователя',
  })
  @UpdateDateColumn()
  @Transform(({ value }) => value.getTime())
  updatedAt: Date;
}
