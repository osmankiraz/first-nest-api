import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { PhotoModule } from './photo/photo.module';
import { UserModule } from './user/user.module';
import { InvoicesModule } from './invoices/invoices.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AddressModule } from './address/address.module';
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot(dataSourceOptions),
    PhotoModule,
    CustomersModule,
    InvoicesModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AddressModule
  
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
