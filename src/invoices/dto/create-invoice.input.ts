import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateInvoiceInput {
  @Field(() => Int, { description: 'Fatura Id si' })
  id: number;

  @Field(() => String, { description: 'Fatura Tipidir' })
  type: string;
}
