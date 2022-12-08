import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from 'src/user/user.entity';

@Entity()
export class Conditions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @OneToOne(() => User, (user) => user.conditions)
  user: User;

  @Column()
  amount: number;

  @Column()
  term: number;

  @Column()
  monthlyPayment: number;
}
