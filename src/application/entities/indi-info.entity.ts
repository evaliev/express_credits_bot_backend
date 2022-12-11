import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class IndiInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  INN: string;

  @Column()
  address: string;

  @Column()
  tel: string;
}
