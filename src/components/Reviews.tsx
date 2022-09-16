import React from "react";
import useFetch from "../hooks/useFetch";
import { REQUESTS } from "../requests/requests";
import { ReviewRequest } from "../types/types";
import Review from "./Review";
import { RowTitle, StyledRow } from "./Row.styles";
import Slider from "./Slider";

interface ReviewsProps {
	id: string;
	mediaType: string;
}

const Reviews: React.FC<ReviewsProps> = ({ id, mediaType }) => {
	let request = `${REQUESTS.baseUrl}${mediaType === "series" ? "tv" : "movie"}/${id}/reviews?api_key=${
		process.env.REACT_APP_IMDB_API_KEY
	}&language=en-US`;

	const { data, error } = useFetch<ReviewRequest>(request);
	console.log(data);

	if (error) {
		return <p>Error loading reviews</p>;
	}
	return (
		<StyledRow>
			<RowTitle>User Reviews</RowTitle>
			{data ? (
				<Slider singleSlide>
					{data?.results.map((el) => (
						<Review review={el} key={el?.id} />
					))}
				</Slider>
			) : (
				<p>No Reviews found for this {mediaType}</p>
			)}
		</StyledRow>
	);
};

export default Reviews;
