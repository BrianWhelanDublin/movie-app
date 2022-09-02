import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { TrendingRequest, GenreRequest, Genres } from "../types/types";
import { randomNumber } from "../utils/helpers";

const Home = () => {
	const { data, error, status } = useFetch<TrendingRequest>(REQUESTS.trending);
	const { data: tvGenres, status: tvGenreStatus } = useFetch<GenreRequest>(REQUESTS.tvGenres);
	const { data: movieGenres, status: movieGenreStatus } = useFetch<GenreRequest>(REQUESTS.movieGenres);

	if (status === "loading" || tvGenreStatus === "loading" || movieGenreStatus === "loading") {
		return <Loading />;
	}

	if (status === "error") {
		return <p>Something has gone wrong.... </p>;
	}

	if (data) {
		const random = randomNumber(1, 20);
		const headerMedia = data?.results[random];

		console.log(headerMedia);

		let genres: Array<Genres> | undefined = [];

		if (headerMedia?.media_type === "tv") {
			genres = tvGenres?.genres;
		} else {
			genres = movieGenres?.genres;
		}

		return <>{headerMedia && genres && <Header media={headerMedia} genres={genres} />}</>;
	}

	return <p>No Items found Please refresh</p>;
};

export default Home;
