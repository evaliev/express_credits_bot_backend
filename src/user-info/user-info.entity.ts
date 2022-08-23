import { User } from 'src/user/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity()
export class UserInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.info)
  user: User;

  @Column()
  organizationName: string;

  @Column()
  INN: number;

  @Column()
  organizationAddress: string;

  @Column()
  organizationTel: string;

  @Column()
  email: string;

  @Column()
  fio: string;

  @Column()
  birthDate: string;

  @Column()
  passportNumber: number;

  @Column()
  passportDate: string;

  @Column()
  divisionCode: string;

  @Column()
  issuedBy: string;

  @Column()
  birthPlace: string;

  @Column()
  ownerAddress: string;

  @Column()
  apartmentNumber: number;

  @Column()
  ownerTel: string;
}
