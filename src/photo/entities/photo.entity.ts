import {
  Column,
  Entity,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() byte: number;
  @Column() width: number;
  @Column() height: number;
}
