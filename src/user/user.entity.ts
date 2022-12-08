import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Conditions } from 'src/conditions/conditions.entity';
import { OwnerInfo } from 'src/owner-info/owner-info.entity';
import { IndiInfo } from 'src/indi-info/indi-info.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  INN: string;

  @Column()
  chatId: string;

  @OneToOne(() => Conditions, (conditions) => conditions.user)
  @JoinColumn()
  conditions: Conditions;

  @OneToOne(() => OwnerInfo, (ownerInfo) => ownerInfo.user)
  @JoinColumn()
  ownerInfo: OwnerInfo;

  @OneToOne(() => IndiInfo, (indiInfo) => indiInfo.user)
  @JoinColumn()
  indiInfo: IndiInfo;
}
