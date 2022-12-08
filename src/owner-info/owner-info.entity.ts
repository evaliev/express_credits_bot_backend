import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class OwnerInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.ownerInfo)
  user: User;

  @Column()
  firstName: string;

  @Column()
  secondName: string;

  @Column()
  middleName: string;

  @Column()
  docNumber: string;

  @Column()
  docDate: string;

  @Column()
  docIssuedBy: string;

  @Column()
  birthPlace: string;

  @Column()
  address: string;
}
