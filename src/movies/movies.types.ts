import { Movie } from 'src/graphql-types.generated';

export type ResolvableMovie = Omit<Movie, 'reviewId'>;
