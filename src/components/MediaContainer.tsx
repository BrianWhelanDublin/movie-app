import React, { useCallback, useRef } from "react";
import { MediaItem } from "../types/types";
import MediaCard, { MediaCardRef } from "./MediaCard";
import { StyledMediaContainer } from "./MediaContainer.styles";

interface MediaContainerProps {
	items: Array<MediaItem>;
	loading?: boolean;
	setPage: React.Dispatch<React.SetStateAction<number>>;
	hasMore?: boolean;
}

const MediaContainer = React.memo<MediaContainerProps>(({ items, loading, setPage, hasMore }) => {
	const observer = useRef<IntersectionObserver | null>(null);

	const lastElementRef = useCallback(
		(node: HTMLDivElement) => {
			if (loading) return;

			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						if (entry.isIntersecting && hasMore) {
							setPage((prev) => prev + 1);
						}
					});
				},
				{ threshold: 1 }
			);

			if (node) observer.current.observe(node);
		},
		[loading, hasMore, setPage]
	);

	return (
		<StyledMediaContainer>
			{items ? (
				items?.map((el, i) => {
					if (el.poster_path !== null) {
						if (items.length === i + 1) {
							return <MediaCardRef ref={lastElementRef} key={`${el.id}-${i}`} media={el} />;
						} else {
							return <MediaCard key={`${el.id}-${i}`} media={el} />;
						}
					}
				})
			) : (
				<p>No items found for this genre</p>
			)}
			{loading && <p>Loading more ....</p>}
		</StyledMediaContainer>
	);
});

export default MediaContainer;
