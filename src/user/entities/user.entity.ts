import { Address } from 'src/address/entities/address.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    nullable: true
  })
  age: number;

  @OneToOne(()=>Address,address => address.user)
  @JoinColumn()
  address:Address
}
