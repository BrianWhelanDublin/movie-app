import { DefaultTheme } from "styled-components";

export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

/**
 * Requests
 */

export interface Requests {
	trending: Scalars["String"];
	movieGenres: Scalars["String"];
	tvGenres: Scalars["String"];
	upcommingMovies: Scalars["String"];
	topRatedTv: Scalars["String"];
	moviesNowPlaying: Scalars["String"];
	tvNowOnAir: Scalars["String"];
}

/**
 * Images
 */

export interface Images {
	baseUrl: Scalars["String"];

	backdropSizes: {
		300: Scalars["String"];
		780: Scalars["String"];
		1280: Scalars["String"];
		original: Scalars["String"];
	};
	logoSizes: {
		45: Scalars["String"];
		92: Scalars["String"];
		154: Scalars["String"];
		185: Scalars["String"];
		300: Scalars["String"];
		500: Scalars["String"];
		original: Scalars["String"];
	};
	posterSizes: {
		92: Scalars["String"];
		154: Scalars["String"];
		185: Scalars["String"];
		342: Scalars["String"];
		500: Scalars["String"];
		780: Scalars["String"];
		original: Scalars["String"];
	};
	profileSizes: {
		45: Scalars["String"];
		185: Scalars["String"];
		632: Scalars["String"];
		original: Scalars["String"];
	};
}

/**
 * Media item type for Movie and Tv Series
 */
export interface MediaItem {
	adult?: Maybe<Scalars["Boolean"]>;
	backdrop_path?: Maybe<Scalars["String"]>;
	first_air_date?: Maybe<Scalars["String"]>;
	genre_ids?: Maybe<Array<Scalars["Int"]>>;
	id?: Maybe<Scalars["Int"]>;
	media_type?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
	origin_country?: Maybe<Array<Scalars["String"]>>;
	original_language?: Maybe<Scalars["String"]>;
	original_name?: Maybe<Scalars["String"]>;
	overview?: Maybe<Scalars["String"]>;
	popularity?: Maybe<Array<Scalars["Int"]>>;
	poster_path?: Maybe<Scalars["String"]>;
	vote_average?: Scalars["Int"];
	vote_count?: Maybe<Array<Scalars["Int"]>>;
	original_title?: Maybe<Scalars["String"]>;
	release_date?: Maybe<Scalars["String"]>;
	title?: Maybe<Scalars["String"]>;
	video?: Maybe<Scalars["Boolean"]>;
}

/**
 * Media Api point request return
 */

export interface MediaRequest {
	page: Scalars["Int"];
	results: Array<MediaItem>;
	total_pages: Scalars["Int"];
	total_results: Scalars["Int"];
}

export interface Genres {
	id: Scalars["Int"];
	name: Scalars["String"];
}

export interface GenreRequest {
	genres: Array<Genres>;
}

/**
 * Default styled component Props
 */

export interface DefaultStyleProps {
	theme: DefaultTheme;
}
