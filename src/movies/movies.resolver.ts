import { Args, Query, Resolver } from '@nestjs/graphql';
import { MoviesService } from 'src/movies/movies.service';
import { ParseIntPipe } from '@nestjs/common';
import { ResolvableMovie } from 'src/movies/movies.types';

@Resolver('Movie')
export class MoviesResolver {
  constructor(private readonly moviesService: MoviesService) {}

  @Query('allMovies')
  async allMovies(): Promise<ResolvableMovie[]> {
    return this.moviesService.findAll();
  }

  @Query('movie')
  async findMovie(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<ResolvableMovie | null | undefined> {
    return this.moviesService.findOne(id);
  }
}
