import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./schema.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql-types.generated.ts'),
        outputAs: 'class',
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
