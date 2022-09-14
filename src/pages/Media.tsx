import { useParams } from "react-router-dom";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { MediaRequest, MovieDetails, TvDetails } from "../types/types";

const Media = () => {
	let params = useParams();
	console.log(params);

	let request = `${REQUESTS.baseUrl}${params.type === "series" ? "tv" : "movie"}/${params.id}?api_key=${process.env.REACT_APP_IMDB_API_KEY}`;
	const { data, error, status } = useFetch<MovieDetails | TvDetails>(request);
	console.log(request, data);
	return data ? <Header media={data} showPoster={true} /> : null;
};

export default Media;
