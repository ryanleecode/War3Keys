import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Image } from './Image';

@Entity({ name: 'unabilities' })
export class Unability {
  @PrimaryColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  hotkey!: string;

  @ManyToOne(
    (type) => Image,
    (image) => image.unabilities,
  )
  image!: Image;

  @Column()
  ordering!: number;
}
