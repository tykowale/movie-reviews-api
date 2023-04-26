
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class Movie {
    id: string;
    name: string;
    description?: Nullable<string>;
}

export abstract class IQuery {
    abstract allMovies(): Nullable<Movie[]> | Promise<Nullable<Movie[]>>;
}

type Nullable<T> = T | null;
