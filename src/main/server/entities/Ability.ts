import { Entity, PrimaryColumn, Column, ManyToOne } from 'typeorm';
import { Image } from './Image';

@Entity({ name: 'abilities' })
export class Ability {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  hotkey!: string;

  @ManyToOne(
    (type) => Image,
    (image) => image.abilities,
  )
  image!: Image;

  @Column()
  ordering!: number;
}
