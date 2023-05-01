
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Movie {
    id: number;
    name: string;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract allMovies(): Movie[] | Promise<Movie[]>;

    abstract movie(id: number): Nullable<Movie> | Promise<Nullable<Movie>>;

    abstract review(id: number): Nullable<Review> | Promise<Nullable<Review>>;

    abstract reviewsByMovieId(id: number): Review[] | Promise<Review[]>;
}

export class Review {
    id: number;
    movieId: number;
    stars: number;
    description?: Nullable<string>;
    movie: Movie;
}

type Nullable<T> = T | null;
