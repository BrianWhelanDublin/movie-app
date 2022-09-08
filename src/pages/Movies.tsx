import React from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
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
		const headerMedia = movies[random];
		let genres = movieGenres?.genres;

		return <>{genres && <Header media={headerMedia} genres={genres} />}</>;
	}

	/**
	 * TODO : Add error component in case of no items returned from api
	 */

	return <p>No Movies found Please refresh</p>;
};

export default Movies;
