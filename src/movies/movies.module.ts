import { Module } from '@nestjs/common';
import { MoviesResolver } from 'src/movies/movies.resolver';

@Module({
  imports: [],
  providers: [MoviesResolver],
})
export class MoviesModule {}
