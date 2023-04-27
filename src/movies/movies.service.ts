import { Injectable } from '@nestjs/common';
import { Movie } from 'src/graphql-types.generated';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 1,
      name: 'Superbad',
    },
    {
      id: 2,
      name: 'Pineapple Express',
    },
    {
      id: 3,
      name: 'This Is The End ',
    },
  ];

  async findAll(): Promise<Movie[]> {
    return this.movies;
  }

  async findOne(id: number): Promise<Movie | null | undefined> {
    return this.movies.find((m) => m.id === id);
  }
}
