import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column({
    unique: true,
  })
  nicknames: string;

  @Column()
  emailArdesi: string;

  @Column()
  bankAccountName: string;

  @Column()
  address_english: string;
}
