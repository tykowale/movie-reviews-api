import { Injectable } from '@nestjs/common';
import { ResolvableReview } from 'src/reviews/reviews.types';

@Injectable()
export class ReviewsService {
  private reviews: ResolvableReview[] = [
    {
      id: 1,
      movieId: 1,
      stars: 4,
    },
    {
      id: 2,
      movieId: 2,
      stars: 5,
    },
    {
      id: 3,
      movieId: 3,
      stars: 4,
    },
    {
      id: 4,
      movieId: 2,
      stars: 4,
    },
  ];

  async findOne(id: number): Promise<ResolvableReview | null | undefined> {
    return this.reviews.find((r) => r.id === id);
  }

  async findByMovieId(id: number): Promise<ResolvableReview[]> {
    return this.reviews.filter((r) => r.movieId === id);
  }
}
