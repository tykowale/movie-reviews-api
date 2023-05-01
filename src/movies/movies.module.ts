import { Module } from '@nestjs/common';
import { MoviesResolver } from 'src/movies/movies.resolver';
import { MoviesService } from 'src/movies/movies.service';

@Module({
  imports: [],
  providers: [MoviesResolver, MoviesService],
  exports: [MoviesService],
})
export class MoviesModule {}
