import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Conditions {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  amount: number;

  @Column()
  term: number;
}
