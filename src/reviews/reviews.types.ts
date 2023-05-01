import { Review } from 'src/graphql-types.generated';

export type ResolvableReview = Omit<Review, 'movie'>;
