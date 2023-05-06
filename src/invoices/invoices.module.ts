import { Module } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './invoices.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';

@Module({
  providers: [InvoicesResolver, InvoicesService],
  imports: [TypeOrmModule.forFeature([Invoice])],
})
export class InvoicesModule {}
