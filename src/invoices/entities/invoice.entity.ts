import { ObjectType, Field, Int  } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Fatura Id si' })
  id: number;

  @Column()
  @Field(() => String, { description: 'Fatura Tipidir' })
  type: string;
}
