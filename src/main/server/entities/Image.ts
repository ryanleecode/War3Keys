import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { Ability } from './Ability';
import { Unability } from './Unability';

@Entity({ name: 'images' })
export class Image {
  @PrimaryColumn()
  name!: string;

  @Column()
  href!: string;

  @OneToMany(
    (type) => Ability,
    (ability) => ability.image,
  )
  abilities!: Ability[];

  @OneToMany(
    (type) => Unability,
    (ability) => ability.image,
  )
  unabilities!: Unability[];
}
