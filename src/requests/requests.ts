import { Images, Requests } from "../types/types";

export const REQUESTS: Requests = {
	trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	movieGenres: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	tvGenres: `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	upcommingMovies: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	topRatedTv: `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	moviesNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_IMDB_API_KEY}`,
	tvNowOnAir: `https://api.themoviedb.org/3/tv/on_the_air?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-gb`,
	moviesLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
	popularMovies: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
	topRatedMovies: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
	popularTv: `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`,
	trendingTv: `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US`,
	moviesByGenre: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`,
	tvByGenre: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&sort_by=popularity.desc&with_genres=`,
};

export const IMAGES: Images = {
	baseUrl: "https://image.tmdb.org/t/p/",

	backdropSizes: {
		300: "w300",
		780: "w780",
		1280: "w1280",
		original: "original",
	},
	logoSizes: {
		45: "w45",
		92: "w92",
		154: "w154",
		185: "w185",
		300: "w300",
		500: "w500",
		original: "original",
	},
	posterSizes: {
		92: "w92",
		154: "w154",
		185: "w185",
		342: "w342",
		500: "w500",
		780: "w780",
		original: "original",
	},
	profileSizes: {
		45: "w45",
		185: "w185",
		632: "w632",
		original: "original",
	},
};
