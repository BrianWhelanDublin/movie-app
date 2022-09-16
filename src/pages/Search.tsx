import React, { useState } from "react";
import FixedHeader, { FixedHeaderTitle } from "../components/FixedHeader";
import MediaContainer from "../components/MediaContainer";
import SideBar from "../components/SideBar";
import usePaginatedQuery from "../hooks/usePaginatedQuery";
import { MediaItem } from "../types/types";
import { debounce } from "../utils/helpers";
import { SearchInput, SearchRadio, SearchRadios } from "./Search.styles";

const Search: React.FC = () => {
	const [value, setValue] = useState<string>("");
	const [page, setPage] = useState<number>(1);
	const [currentRadioValue, setCurrentRadioValue] = useState<string>("movie");

	let request: string = "";
	if (value.length) {
		request = `https://api.themoviedb.org/3/search/${currentRadioValue}?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1&query=${value}`;
	}

	const { data, error, loading, hasMore } = usePaginatedQuery<MediaItem>(request, page);

	const handleChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
		window.scrollTo(0, 0);
		setPage(1);
		setValue(e.target.value);
	}, 1000);

	const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPage(1);
		setCurrentRadioValue(e.target.value);
	};

	return (
		<>
			<FixedHeader>
				{data.length ? (
					<FixedHeaderTitle>
						Search results for : {value} in {currentRadioValue === "movie" ? "movies" : "series"}
					</FixedHeaderTitle>
				) : (
					<FixedHeaderTitle>Search Movies or Series</FixedHeaderTitle>
				)}
			</FixedHeader>

			<SideBar>
				<SearchRadios>
					<SearchRadio>
						<input id="movie" name="movie" type="radio" value="movie" onChange={handleRadioChange} checked={currentRadioValue === "movie"} />
						<label htmlFor="movie">Movies</label>
					</SearchRadio>
					<SearchRadio>
						<input id="series" name="series" type="radio" value="tv" onChange={handleRadioChange} checked={currentRadioValue === "tv"} />
						<label htmlFor="series">Series</label>
					</SearchRadio>
				</SearchRadios>
				<SearchInput>
					<label htmlFor="search">Search: </label>
					<input onChange={(e) => handleChange(e)} type="text" name="search" placeholder="Enter search" />
				</SearchInput>
			</SideBar>

			{data.length > 1 && <MediaContainer items={data} loading={loading} setPage={setPage} hasMore={hasMore} mediaType={currentRadioValue} />}
		</>
	);
};

export default Search;
