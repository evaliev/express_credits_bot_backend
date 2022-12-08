import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class IndiInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.indiInfo)
  user: User;

  @Column()
  name: string;

  @Column()
  INN: string;

  @Column()
  address: string;

  @Column()
  tel: string;
}
