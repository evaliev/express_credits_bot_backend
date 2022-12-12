import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ApplicationStatusses } from 'src/enums';
import { Conditions } from './conditions.entity';
import { OwnerInfo } from './owner-info.entity';
import { IndiInfo } from './indi-info.entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  chatId: string;

  @Column()
  status: ApplicationStatusses;

  @OneToOne(() => Conditions)
  @JoinColumn()
  conditions: Conditions;

  @OneToOne(() => OwnerInfo)
  @JoinColumn()
  ownerInfo: OwnerInfo;

  @OneToOne(() => IndiInfo)
  @JoinColumn()
  indiInfo: IndiInfo;
}
