import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { MoviesModule } from 'src/movies/movies.module';
import { ReviewsModule } from './reviews/reviews.module';
import { MoviesReviewsModule } from './movies-reviews/movies-reviews.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      typePaths: ['./**/*.graphql'],
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      definitions: {
        path: join(process.cwd(), 'src/graphql-types.generated.ts'),
        outputAs: 'class',
      },
    }),
    MoviesModule,
    ReviewsModule,
    MoviesReviewsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
