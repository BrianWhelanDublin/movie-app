import React from "react";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { GenreRequest } from "../types/types";
import { GenreCard, StyledGenresRow } from "./GenresRow.styles";
import Loading from "./Loading";
import Slider from "./Slider";

interface GenresRowProps {
	mediaType: "movie" | "series";
}

const GenresRow: React.FC<GenresRowProps> = ({ mediaType }) => {
	const request = mediaType === "movie" ? REQUESTS.movieGenres : REQUESTS.tvGenres;
	const { data, error, status } = useFetch<GenreRequest>(request);

	console.log(data);

	if (status === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Something has gone wrong.... </p>;
	}

	return (
		<StyledGenresRow>
			{data && (
				<Slider>
					{data.genres.map((el) => (
						<GenreCard href="#" key={el.id}>
							{el.name}
						</GenreCard>
					))}
				</Slider>
			)}
		</StyledGenresRow>
	);
};

export default GenresRow;
