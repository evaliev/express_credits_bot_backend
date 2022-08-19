import { IsNumber, Min, Max } from 'class-validator';
import { Transform } from 'class-transformer';
import { User } from 'src/user/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

enum CreditApplicationStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
}

@Entity()
export class CreditApplication {
  @ApiProperty({
    example: '165cea0a-3372-4273-b77e-f2a16b47b19b',
    description: 'Id заявки',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user: User) => user.applications)
  user: User;

  @ApiProperty({
    example: '1500000',
    description: 'Сумма кредита',
  })
  @Column()
  @IsNumber()
  @Min(10 ** 5)
  @Max(10 ** 7)
  amount: number;

  @ApiProperty({
    example: '36',
    description: 'Срок кредита (мес)',
  })
  @Column()
  @IsNumber()
  @Min(1)
  @Max(36)
  term: number;

  @ApiProperty({
    example: '11',
    description: 'Процентная ставка по кредиту',
  })
  @Column()
  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number;

  @ApiProperty({
    example: 'DRAFT',
    description: 'Статус заявки',
  })
  @Column({
    type: 'enum',
    enum: CreditApplicationStatus,
    default: CreditApplicationStatus.DRAFT,
  })
  status: CreditApplicationStatus;

  @ApiProperty({
    example: '2022-08-18T12:35:56.015Z',
    description: 'Время создания заявки',
  })
  @CreateDateColumn()
  @Transform(({ value }) => value.getTime())
  createdAt: Date;

  @ApiProperty({
    example: '2022-08-18T12:35:56.015Z',
    description: 'Время обновления заявки',
  })
  @UpdateDateColumn()
  @Transform(({ value }) => value.getTime())
  updatedAt: Date;
}
