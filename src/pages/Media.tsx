import { useParams } from "react-router-dom";
import CreditsRow from "../components/CreditsRow";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Reviews from "../components/Reviews";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { MovieDetails, TvDetails } from "../types/types";

const Media = () => {
	let params = useParams();

	let request = `${REQUESTS.baseUrl}${params.type === "series" ? "tv" : "movie"}/${params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`;
	const { data, error, status } = useFetch<MovieDetails | TvDetails>(request);

	if (status === "loading") {
		return <Loading />;
	}
	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	return (
		<>
			{data && <Header media={data} showPoster={true} showButton={false} />}
			<CreditsRow id={params.id as string} mediaType={params.type as string} />
			<Reviews id={params.id as string} mediaType={params.type as string} />
		</>
	);
};

export default Media;
