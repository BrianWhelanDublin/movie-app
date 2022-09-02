/**
 * Media item type for Movie and Tv Series
 */
export interface MediaItem {
	adult?: Boolean;
	backdrop_path?: string;
	first_air_date?: string;
	genre_ids?: Array<number>;
	id?: number;
	media_type?: string;
	name?: string;
	origin_country?: Array<string>;
	original_language?: string;
	original_name?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string;
	vote_average?: number;
	vote_count?: number;
	original_title?: string;
	release_date?: string;
	title?: string;
	video?: Boolean;
}

/**
 * Trending Api point retquest return
 */

export interface TrendingRequest {
	page: number;
	results: Array<MediaItem>;
	total_pages: number;
	total_results: number;
}

export interface Genres {
	id: number;
	name: string;
}

export interface GenreRequest {
	genres: Array<Genres>;
}
