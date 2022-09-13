import { useState } from "react";
import { Navigate, Router, useParams } from "react-router-dom";

import MediaContainer from "../components/MediaContainer";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import usePaginatedQuery from "../hooks/usePaginatedQuery";
import { REQUESTS } from "../requests/requests";
import { GenreRequest, MediaItem } from "../types/types";
import { GenreItemsContainer, GenreLink, GenrePageList, GenresSelect, GenresTitle, GenresTitleContainer } from "./Genres.styles";

const Genres = () => {
	let params = useParams();
	const [page, setPage] = useState<number>(1);
	const [genre, setGenre] = useState<string | undefined>(params?.genre);

	let request = `${params?.type === "movie" ? REQUESTS.moviesByGenre : REQUESTS.tvByGenre}${genre}&page=${page}`;
	let genreRequest = params.type === "movie" ? REQUESTS.movieGenres : REQUESTS.tvGenres;

	console.log(request);

	const { data: genresList } = useFetch<GenreRequest>(genreRequest);
	const { data, error, loading, hasMore } = usePaginatedQuery<MediaItem>(request, page);

	const currentGenre = genresList?.genres?.filter((el) => `${el?.id}` === (genre as string))[0];
	const navigate = useNavigate();
	const handleChange = (e: React.FormEvent<HTMLSelectElement>) => {
		e.preventDefault();
		window.scrollTo(0, 0);
		navigate(`../genres/${params.type}/${e.currentTarget.value}`, { replace: true });
		setGenre(e.currentTarget.value);
		setPage(1);
	};

	const handleClick = (id: string) => {
		window.scrollTo(0, 0);
		navigate(`../genres/${params.type}/${id}`, { replace: true });
		setGenre(id);
		setPage(1);
	};

	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	console.log(data, loading);

	return (
		<>
			{currentGenre && (
				<GenresTitleContainer>
					<GenresTitle>Results for {currentGenre?.name}</GenresTitle>

					<GenresSelect defaultValue={"DEFAULT"} onChange={handleChange}>
						{genresList?.genres?.map((genre) => (
							<option key={genre?.id} value={genre?.id === currentGenre?.id ? "DEFAULT" : genre?.id}>
								{genre.name}
							</option>
						))}
					</GenresSelect>
				</GenresTitleContainer>
			)}
			<GenreItemsContainer>
				<GenrePageList>
					{genresList?.genres?.map((genre) => {
						if (genre?.id !== currentGenre?.id) {
							return (
								<GenreLink key={genre?.id} onClick={() => handleClick(`${genre.id}`)}>
									{genre.name}
								</GenreLink>
							);
						}
					})}
				</GenrePageList>
				<MediaContainer items={data} loading={loading} setPage={setPage} hasMore={hasMore} />
			</GenreItemsContainer>
		</>
	);
};

export default Genres;
