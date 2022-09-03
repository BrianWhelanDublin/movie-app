import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import useFetch from "../hooks/useFetch";
import { TrendingRequest } from "../types/types";
import Loading from "./Loading";
import MediaCard from "./MediaCard";
import { StyledCardContainer, StyledInnerContainer, StyledRow } from "./Row.styles";

interface RowProps {
	request: string;
	title: string;
}

const Row: React.FC<RowProps> = ({ request, title }) => {
	const { data, error, status } = useFetch<TrendingRequest>(request);
	const container = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const innerContainer = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;
	const card = useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>;

	const [width, setWidth] = useState<number>(0);

	if (status === "loading") {
		return <Loading />;
	}

	if (error) {
		return <p>Error loading items</p>;
	}

	const handleClick = (direction: string) => {
		const cardMargin = getComputedStyle(card.current).marginRight.replace("px", "");
		const cardWidth = card.current?.clientWidth;
		const cardTotalWidth = cardWidth + parseInt(cardMargin);

		const containerWidth = container?.current?.offsetWidth;
		const innerContainerWidth = innerContainer?.current?.scrollWidth;

		const numberOfCards = Math.floor(containerWidth / cardTotalWidth);
		const widthToMove = numberOfCards * cardTotalWidth;
		const maxWidth = innerContainerWidth - containerWidth;
		console.log(width, maxWidth, containerWidth);

		if (direction === "right") {
			if (width < maxWidth - widthToMove) {
				setWidth((state) => (state += widthToMove));
			} else {
				setWidth((state) => (state = maxWidth));
			}
		} else {
			if (width > widthToMove) {
				setWidth((state) => (state -= widthToMove));
			} else {
				setWidth((state) => (state = 0));
			}
		}
	};

	return (
		<StyledRow>
			<h2 className="title">{title}</h2>
			<StyledCardContainer ref={container}>
				{data && (
					<StyledInnerContainer style={{ transform: `translateX(-${width}px)` }} ref={innerContainer}>
						{data.results.map((el) => (
							<MediaCard ref={card} media={el} key={el.id} />
						))}
					</StyledInnerContainer>
				)}
			</StyledCardContainer>
			<button onClick={() => handleClick("left")}>Left</button>
			<button onClick={() => handleClick("right")}>right</button>
		</StyledRow>
	);
};

export default Row;
