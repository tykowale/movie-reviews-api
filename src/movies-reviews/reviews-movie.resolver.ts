import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Review } from 'src/graphql-types.generated';
import { MoviesService } from 'src/movies/movies.service';
import { ResolvableMovie } from 'src/movies/movies.types';

@Resolver('Review')
export class ReviewsMovieResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @ResolveField()
  async movie(@Parent() review: Review): Promise<ResolvableMovie> {
    return this.moviesService.findOne(review.movieId);
  }
}
