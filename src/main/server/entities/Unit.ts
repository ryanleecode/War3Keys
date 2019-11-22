import {
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  Column,
  ManyToMany,
  JoinTable,
  ManyToOne,
} from 'typeorm';
import { FactionDetail } from './FactionDetail';
import { Ability } from './Ability';
import { Image } from './Image';
import { Unability } from './Unability';

@Entity({ name: 'units' })
export class Unit {
  @PrimaryColumn()
  name!: string;

  @ManyToOne(
    (type) => FactionDetail,
    (faction) => faction.units,
  )
  faction!: FactionDetail;

  @Column()
  isHero!: boolean;

  @Column()
  isBuilding!: boolean;

  @OneToOne((type) => Image)
  @JoinColumn()
  image!: Image;

  @ManyToMany((type) => Ability)
  @JoinTable()
  abilities?: Ability[];

  @ManyToMany((type) => Unability)
  @JoinTable()
  unabilities?: Unability[];

  @Column()
  ordering!: number;
}
