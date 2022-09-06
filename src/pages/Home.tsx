import CallToActionRow from "../components/CallToActionRow";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Row from "../components/Row";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { MediaRequest, GenreRequest, Genres } from "../types/types";
import { randomNumber } from "../utils/helpers";

const Home: React.FC = () => {
	const { data, error, status } = useFetch<MediaRequest>(REQUESTS.trending);
	const { data: tvGenres, status: tvGenreStatus } = useFetch<GenreRequest>(REQUESTS.tvGenres);
	const { data: movieGenres, status: movieGenreStatus } = useFetch<GenreRequest>(REQUESTS.movieGenres);

	if (status === "loading" || tvGenreStatus === "loading" || movieGenreStatus === "loading") {
		return <Loading />;
	}

	if (status === "error") {
		return <p>Something has gone wrong.... </p>;
	}

	if (data !== undefined) {
		const random = randomNumber(1, 20);
		const headerMedia = data?.results[random];

		let genres: Array<Genres> | undefined = [];

		if (headerMedia?.media_type === "tv") {
			genres = tvGenres?.genres;
		} else {
			genres = movieGenres?.genres;
		}

		return (
			<>
				{headerMedia && <Header media={headerMedia} genres={genres as Genres[]} />}
				<Row request={REQUESTS.trending} title="Trending" />
				<Row request={REQUESTS.upcommingMovies} title="Upcomming Movies" />
				<CallToActionRow request={REQUESTS.moviesNowPlaying} title="Movies in Cinema Now" ctaText="See All Movies" ctaLink="/movies" />
				<Row request={REQUESTS.topRatedTv} title="Top Rated Tv" />
				<CallToActionRow request={REQUESTS.tvNowOnAir} title="Series on Tv Now" ctaText="See All Series" ctaLink="/series" />
			</>
		);
	}

	/**
	 * TODO : Add error component in case of no items returned from api
	 */

	return <p>No Items found Please refresh</p>;
};

export default Home;
