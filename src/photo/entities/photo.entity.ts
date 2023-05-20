import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column() byte: number;
  @Column() width: number;
  @Column() height: number;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
