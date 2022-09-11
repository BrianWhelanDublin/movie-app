import React from "react";
import GenresRow from "../components/GenresRow";

import Header from "../components/Header";
import Loading from "../components/Loading";
import Row from "../components/Row";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { MediaRequest, GenreRequest, Genres } from "../types/types";
import { randomNumber } from "../utils/helpers";

const Movies: React.FC = () => {
	const { data, error, status } = useFetch<MediaRequest>(REQUESTS.trending);

	const { data: movieGenres, status: movieGenreStatus } = useFetch<GenreRequest>(REQUESTS.movieGenres);
	if (status === "loading" || movieGenreStatus === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	if (data) {
		const movies = data?.results?.filter((el) => el.media_type === "movie");
		const random = randomNumber(1, movies?.length);
		const headerMedia = movies[random - 1];
		let genres = movieGenres?.genres;

		return (
			<>
				{genres && <Header media={headerMedia} genres={genres} />}
				<GenresRow mediaType="movie" />
				<Row request={REQUESTS.moviesNowPlaying} title="Movies in Cinemas Now" />
				<Row request={REQUESTS.topRatedMovies} title="Top Rated Movies" />
				<Row request={REQUESTS.popularMovies} title="Popular Movies" />
				<Row request={REQUESTS.upcommingMovies} title="Upcomming Movies" />
			</>
		);
	}

	/**
	 * TODO : Add error component in case of no items returned from api
	 */

	return <p>No Movies found Please refresh</p>;
};

export default Movies;
