import {
  Entity,
  PrimaryColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Faction } from '../graphql/generated';
import { Image } from './Image';
import { Unit } from './Unit';

@Entity({ name: 'faction_details' })
export class FactionDetail {
  @PrimaryColumn({ type: 'text', unique: true })
  name!: Faction;

  @OneToOne((_type) => Image)
  @JoinColumn()
  image!: Image;

  @OneToMany(
    (_type) => Unit,
    (unit) => unit.faction,
  )
  units!: Unit[];
}
