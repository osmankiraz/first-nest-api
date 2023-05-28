import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    length: 50,
    unique:true
  })
  name: string;

  @Column({ type: 'int', nullable: false, unique: true })
  plate: number;
}
