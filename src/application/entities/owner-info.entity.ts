import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class OwnerInfo {
  @PrimaryGeneratedColumn('uuid')
  id: string;

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
