import { Args, Query, Resolver } from '@nestjs/graphql';
import { Movie } from 'src/graphql-types.generated';
import { MoviesService } from 'src/movies/movies.service';
import { ParseIntPipe } from '@nestjs/common';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query('allMovies')
  async allMovies(): Promise<Movie[]> {
    return this.moviesService.findAll();
  }

  @Query('movie')
  async findMovie(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Movie | null | undefined> {
    return this.moviesService.findOne(id);
  }
}
