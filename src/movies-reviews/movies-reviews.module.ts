import { Module } from '@nestjs/common';
import { ReviewsMovieResolver } from 'src/movies-reviews/reviews-movie.resolver';
import { MoviesModule } from 'src/movies/movies.module';
import { ReviewsModule } from 'src/reviews/reviews.module';

@Module({
  imports: [MoviesModule, ReviewsModule],
  providers: [ReviewsMovieResolver],
})
export class MoviesReviewsModule {}
