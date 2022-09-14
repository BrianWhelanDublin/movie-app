import { useState } from "react";
import { useParams } from "react-router-dom";

import MediaContainer from "../components/MediaContainer";
import { useNavigate } from "react-router-dom";

import useFetch from "../hooks/useFetch";
import usePaginatedQuery from "../hooks/usePaginatedQuery";
import { REQUESTS } from "../requests/requests";
import { GenreRequest, MediaItem } from "../types/types";
import { GenreItemsContainer, GenreLink, GenrePageList, GenresSelect } from "./Genres.styles";
import FixedHeader, { FixedHeaderTitle } from "../components/FixedHeader";
import SideBar from "../components/SideBar";

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
				<FixedHeader>
					<FixedHeaderTitle>Results for {currentGenre?.name}</FixedHeaderTitle>
				</FixedHeader>
			)}
			<SideBar>
				<GenresSelect defaultValue={"DEFAULT"} onChange={handleChange}>
					{genresList?.genres?.map((genre) => (
						<option key={genre?.id} value={genre?.id === currentGenre?.id ? "DEFAULT" : genre?.id}>
							{genre.name}
						</option>
					))}
				</GenresSelect>
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
			</SideBar>
			<MediaContainer items={data} loading={loading} setPage={setPage} hasMore={hasMore} />
		</>
	);
};

export default Genres;
