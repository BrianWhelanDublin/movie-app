import { useState } from "react";
import { useParams } from "react-router-dom";

import MediaContainer from "../components/MediaContainer";

import useFetch from "../hooks/useFetch";
import usePaginatedQuery from "../hooks/usePaginatedQuery";
import { REQUESTS } from "../requests/requests";
import { GenreRequest, MediaItem } from "../types/types";
import { GenresTitle } from "./Genres.styles";

const Genres = () => {
	let params = useParams();
	const [page, setPage] = useState<number>(1);

	let request = `${params?.type === "movie" ? REQUESTS.moviesByGenre : REQUESTS.tvByGenre}${params?.genre}&page=${page}`;
	let genreRequest = params.type === "movie" ? REQUESTS.movieGenres : REQUESTS.tvGenres;

	const { data: genresList } = useFetch<GenreRequest>(genreRequest);
	const { data, error, loading, hasMore } = usePaginatedQuery<MediaItem>(request, page);

	const currentGenre = genresList?.genres?.filter((el) => `${el?.id}` === (params?.genre as string))[0];

	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	return (
		<>
			{currentGenre && <GenresTitle>Results for {currentGenre?.name}</GenresTitle>}
			<MediaContainer items={data} loading={loading} setPage={setPage} hasMore={hasMore} />
		</>
	);
};

export default Genres;
