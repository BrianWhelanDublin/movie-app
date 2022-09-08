import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { MediaRequest, GenreRequest, Genres } from "../types/types";
import { randomNumber } from "../utils/helpers";

const Series: React.FC = () => {
	const { data, error, status } = useFetch<MediaRequest>(REQUESTS.trending);

	const { data: tvGenres, status: tvGenreStatus } = useFetch<GenreRequest>(REQUESTS.tvGenres);
	if (status === "loading" || tvGenreStatus === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	if (data) {
		const series = data?.results?.filter((el) => el.media_type === "tv");
		const random = randomNumber(1, series?.length);
		const headerMedia = series[random];
		let genres = tvGenres?.genres;
		return <>{genres && <Header media={headerMedia} genres={genres} />}</>;
	}

	/**
	 * TODO : Add error component in case of no items returned from api
	 */

	return <p>No Series found Please refresh</p>;
};

export default Series;
