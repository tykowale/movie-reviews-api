import { Query, Resolver } from '@nestjs/graphql';
import { Movie } from 'src/graphql-types.generated';

@Resolver('Movie')
export class MoviesResolver {
  @Query('allMovies')
  async allMovies(): Promise<Movie[]> {
    return [
      {
        id: '1',
        name: 'Superman',
      },
    ];
  }
}
