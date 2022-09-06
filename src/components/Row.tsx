import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { MediaRequest } from "../types/types";
import Loading from "./Loading";
import MediaCard from "./MediaCard";
import { StyledCardContainer, StyledInnerContainer, StyledRow } from "./Row.styles";
import Slider from "./Slider";

interface RowProps {
	request: string;
	title: string;
}

const Row: React.FC<RowProps> = ({ request, title }) => {
	const { data, error, status } = useFetch<MediaRequest>(request);

	if (status === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Error loading items</p>;
	}

	return (
		<StyledRow>
			<h2 className="title">{title}</h2>

			{data && (
				<Slider>
					{data.results.map((el) => (
						<MediaCard media={el} key={el.id} />
					))}
				</Slider>
			)}
		</StyledRow>
	);
};

export default Row;
