import { Args, Query, Resolver } from '@nestjs/graphql';
import { ParseIntPipe } from '@nestjs/common';
import { Review } from 'src/graphql-types.generated';
import { ReviewsService } from 'src/reviews/reviews.service';
import { ResolvableReview } from 'src/reviews/reviews.types';

@Resolver('Review')
export class ReviewsResolver {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Query('review')
  async findReview(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<ResolvableReview | null | undefined> {
    return this.reviewsService.findOne(id);
  }

  @Query('reviewsByMovieId')
  async findReviewsByMovieId(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<ResolvableReview[]> {
    return this.reviewsService.findByMovieId(id);
  }
}
