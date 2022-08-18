import { Transform } from 'class-transformer';
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tel: string;

  @VersionColumn()
  version: number;

  @CreateDateColumn()
  @Transform(({ value }) => value.getTime())
  createdAt: Date;

  @UpdateDateColumn()
  @Transform(({ value }) => value.getTime())
  updatedAt: Date;
}